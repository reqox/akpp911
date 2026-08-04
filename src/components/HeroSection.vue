<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconGear from './icons/IconGear.vue';
import IconClock from './icons/IconClock.vue';
import IconShield from './icons/IconShield.vue';
import IconBox from './icons/IconBox.vue';
import PhotoPlaceholder from './PhotoPlaceholder.vue';
import { TRUST_BADGES } from '../config/siteData';

const badgeIcons = { clock: IconClock, shield: IconShield, box: IconBox };

const layerA = ref(null);
const layerB = ref(null);
let ticking = false;
let parallaxEnabled = false;

function onScroll() {
  if (!parallaxEnabled || ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (layerA.value)
      layerA.value.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
    if (layerB.value)
      layerB.value.style.transform = `translate3d(0, ${y * 0.22}px, 0) rotate(${y * 0.03}deg)`;
    ticking = false;
  });
}

onMounted(() => {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  parallaxEnabled = isDesktop && !reduceMotion;
  if (parallaxEnabled)
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-bg-photo">
      <PhotoPlaceholder
        label="Фон: ремонтный цех, разобранная АКПП на столе"
        ratio="16 / 10"
      />
    </div>

    <div ref="layerA" class="hero-gear hero-gear--a" aria-hidden="true">
      <IconGear />
    </div>
    <div ref="layerB" class="hero-gear hero-gear--b" aria-hidden="true">
      <IconGear />
    </div>

    <div class="container hero-content">
      <p class="eyebrow">АКПП911 · Сервис трансмиссий</p>
      <h1 class="hero-title">
        Ремонт АКПП, DSG, CVT(вариаторов), редукторов и раздаток.
        <span class="text-gold-shimmer">Для автомобилей, яхт и катеров.</span>
      </h1>
      <p class="hero-subtitle">
        От замены масла до капитального ремонта. Мехатроники,
        гидротрансформаторы, блоки клапанов, сцепление DSG. Работаем с гарантией
        до 2 лет.
      </p>

      <div class="hero-actions">
        <a href="#contacts" class="btn btn-gold"
          >Получить консультацию мастера</a
        >
        <a href="#services" class="btn btn-outline">Смотреть услуги</a>
      </div>

      <ul class="trust-badges">
        <li v-for="badge in TRUST_BADGES" :key="badge.text" class="trust-badge">
          <component :is="badgeIcons[badge.icon]" class="trust-icon" />
          {{ badge.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: 56px;
  padding-bottom: 64px;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero {
    padding-top: 90px;
    padding-bottom: 100px;
  }
}

.hero-bg-photo {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.16;
  pointer-events: none;
}

.hero-bg-photo :deep(.photo-placeholder) {
  height: 100%;
  border: none;
  border-radius: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      60% 60% at 20% 20%,
      rgba(212, 168, 67, 0.12),
      transparent 70%
    ),
    linear-gradient(180deg, rgba(5, 13, 26, 0.4), var(--bg-primary) 85%);
  z-index: 0;
}

.hero-gear {
  position: absolute;
  color: var(--gold);
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

.hero-gear svg {
  width: 100%;
  height: 100%;
}

.hero-gear--a {
  width: 320px;
  height: 320px;
  top: -60px;
  right: -80px;
}

.hero-gear--b {
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: -60px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.hero-title {
  font-size: clamp(30px, 5.4vw, 52px);
  font-weight: 800;
  margin-top: 18px;
  letter-spacing: -0.01em;
}

.hero-subtitle {
  margin-top: 22px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 560px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--gold-line);
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
}

.trust-icon {
  width: 20px;
  height: 20px;
  color: var(--gold);
  flex-shrink: 0;
}
</style>
