<script setup>
import IconGear from './icons/IconGear.vue'
import { SERVICES } from '../config/siteData'
</script>

<template>
  <section id="services" class="section services">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">Наши услуги</p>
        <h2 class="section-title">
          Обслуживаем <span class="accent">все типы трансмиссий</span> — от диагностики до капремонта
        </h2>
        <p class="section-lead">
          Работаем с автоматическими коробками, роботами DSG, вариаторами, редукторами и раздатками —
          для автомобилей и яхт.
        </p>
      </div>

      <div class="services-grid" v-fade-in-stagger>
        <article v-for="(service, i) in SERVICES" :key="service.title" class="service-card card-panel">
          <div class="service-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="service-icon">
            <IconGear />
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 46px;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  position: relative;
  padding: 28px 24px;
  transition: transform 0.3s var(--ease-out), border-color 0.3s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-line-strong);
}

.service-number {
  position: absolute;
  top: 18px;
  right: 22px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  color: var(--gold-line-strong);
}

.service-icon {
  width: 42px;
  height: 42px;
  color: var(--gold);
  margin-bottom: 16px;
  transition: transform 0.5s var(--ease-out);
}

.service-card:hover .service-icon {
  transform: rotate(50deg);
}

.service-icon svg { width: 100%; height: 100%; }

.service-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}

.service-desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
}
</style>
