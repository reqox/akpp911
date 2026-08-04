<script setup>
import IconGear from './icons/IconGear.vue';
import { PRICES } from '../config/siteData';
</script>

<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">Прайс</p>
        <h2 class="section-title">
          Цены на <span class="accent">популярные работы</span>
        </h2>
        <p class="section-lead">
          Точная стоимость определяется после бесплатной диагностики.
        </p>
      </div>

      <div class="price-list card-panel" v-fade-in>
        <div v-for="row in PRICES" :key="row.name" class="price-row">
          <div class="price-icon">
            <IconGear />
          </div>
          <div class="price-name">
            {{ row.name }}
            <span v-if="row.note" class="price-note">{{ row.note }}</span>
          </div>
          <div class="price-value">{{ row.price }}</div>
        </div>
      </div>
      <p class="price-disclaimer">
        Точная стоимость после бесплатной диагностики.
      </p>
    </div>
  </section>
</template>

<style scoped>
.price-list {
  margin-top: 42px;
  overflow: hidden;
}

.price-row {
  display: grid;
  grid-template-columns: 32px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid var(--gold-line);
}

@media (max-width: 480px) {
  .price-row {
    display: flex;
    flex-direction: column;
  }

  .price-name {
    text-align: center;
  }
}

.price-row:last-child {
  border-bottom: none;
}

.price-icon {
  width: 20px;
  height: 20px;
  color: var(--gold);
  opacity: 0.7;
}

.price-icon svg {
  width: 100%;
  height: 100%;
}

.price-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
}

.price-note {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 2px;
}

.price-value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
  color: var(--gold-light);
  white-space: nowrap;
}

.price-disclaimer {
  margin-top: 16px;
  font-size: 13px;
  color: var(--text-muted);
}
</style>
