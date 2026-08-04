<script setup>
import PhotoPlaceholder from './PhotoPlaceholder.vue';
import { STATS } from '../config/siteData';
import { useCounter } from '../composables/useCounter';

const counters = STATS.map((stat) => ({ ...stat, ...useCounter(stat.value) }));
</script>

<template>
  <section id="about" class="section stats">
    <div class="container stats-layout">
      <div class="stats-content">
        <div v-fade-in>
          <p class="eyebrow">О сервисе в цифрах</p>
          <h2 class="section-title">
            15 лет опыта —
            <span class="accent">2 500+ трансмиссий</span> вернули в строй
          </h2>
        </div>

        <div class="stats-grid" v-fade-in-stagger>
          <div
            v-for="counter in counters"
            :key="counter.label"
            :ref="(el) => (counter.elRef.value = el)"
            class="stat-item"
          >
            <div class="stat-value text-gold-shimmer">
              {{ counter.displayValue }}{{ counter.suffix }}
            </div>
            <div class="stat-label">{{ counter.label }}</div>
          </div>
        </div>

        <p class="stats-extra">
          Собственный склад запчастей: оригинал и качественные аналоги в
          наличии.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-layout {
  display: flex;
  justify-content: stretch;
  align-items: center;
}

@media (min-width: 900px) {
  .stats-layout {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 60px;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 20px;
  margin-top: 40px;
}

.stat-item {
  border-left: 2px solid var(--gold-line-strong);
  padding-left: 16px;
}

.stat-value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1;
}

.stat-label {
  margin-top: 8px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.4;
}

.stats-extra {
  margin-top: 30px;
  font-size: 14px;
  color: var(--text-muted);
  padding-top: 20px;
  border-top: 1px solid var(--gold-line);
}
</style>
