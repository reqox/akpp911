<script setup>
import IconWrench from './icons/IconWrench.vue'
import IconShield from './icons/IconShield.vue'
import IconTruck from './icons/IconTruck.vue'
import IconClock from './icons/IconClock.vue'
import IconBox from './icons/IconBox.vue'
import { ADVANTAGES } from '../config/siteData'

const icons = { wrench: IconWrench, shield: IconShield, truck: IconTruck, clock: IconClock, box: IconBox }
</script>

<template>
  <section class="section why-us">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">Почему выбирают нас</p>
        <h2 class="section-title">
          Не просто ремонт — <span class="accent">инженерный подход</span> к каждой коробке
        </h2>
      </div>

      <div class="advantages-grid" v-fade-in-stagger>
        <div v-for="adv in ADVANTAGES" :key="adv.title" class="advantage-item">
          <div class="advantage-icon">
            <component :is="icons[adv.icon]" />
          </div>
          <div>
            <h3 class="advantage-title">{{ adv.title }}</h3>
            <p class="advantage-desc">{{ adv.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 46px;
}

@media (min-width: 768px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.advantage-item {
  display: flex;
  gap: 18px;
}

.advantage-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: rgba(212, 168, 67, 0.08);
  border: 1px solid var(--gold-line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

.advantage-icon svg {
  width: 24px;
  height: 24px;
}

.advantage-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
}

.advantage-desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
}
</style>
