<script setup>
import { MODEL_GROUPS } from '../config/siteData'
</script>

<template>
  <section class="section models">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">С чем работаем</p>
        <h2 class="section-title">
          Коды и модели <span class="accent">трансмиссий</span> в нашей практике
        </h2>
      </div>

      <div class="models-grid" v-fade-in-stagger>
        <div v-for="group in MODEL_GROUPS" :key="group.title" class="model-group card-panel">
          <h3 class="model-group-title">{{ group.title }}</h3>
          <div class="model-chips">
            <span v-for="item in group.items" :key="item" class="model-chip">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.models-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 42px;
}

@media (min-width: 768px) {
  .models-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.model-group {
  padding: 26px 24px;
}

.model-group-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  color: var(--gold-light);
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.model-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.model-chip {
  font-size: 13px;
  font-weight: 600;
  padding: 7px 13px;
  border-radius: 999px;
  border: 1px solid var(--gold-line);
  color: var(--text-secondary);
  background: rgba(212, 168, 67, 0.04);
}
</style>
