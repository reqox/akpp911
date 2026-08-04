<script setup>
import { STEPS } from '../config/siteData'
</script>

<template>
  <section class="section steps">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">Как мы работаем</p>
        <h2 class="section-title">
          Путь от заявки <span class="accent">до выдачи с гарантией</span>
        </h2>
      </div>

      <div class="steps-line" v-fade-in-stagger>
        <div v-for="(step, i) in STEPS" :key="step.title" class="step-item">
          <div class="step-marker">
            <span class="step-index">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps-line {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 48px;
  position: relative;
}

@media (min-width: 900px) {
  .steps-line {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  .steps-line::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 4%;
    right: 4%;
    height: 1px;
    background: var(--gold-line);
  }
}

.step-item {
  position: relative;
}

.step-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-panel);
  border: 1px solid var(--gold-line-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.step-index {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13px;
  color: var(--gold-light);
}

.step-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 220px;
}
</style>
