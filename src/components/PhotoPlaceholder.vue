<script setup>
import IconImage from './icons/IconImage.vue'

defineProps({
  label: { type: String, default: 'Фото' },
  ratio: { type: String, default: '4 / 3' }, // aspect-ratio css value
})
</script>

<template>
  <div class="photo-placeholder" :style="{ aspectRatio: ratio }">
    <IconImage class="ph-icon" />
    <span class="ph-label">{{ label }}</span>
  </div>
</template>

<style scoped>
.photo-placeholder {
  position: relative;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px dashed var(--gold-line-strong);
  background: repeating-linear-gradient(
    135deg,
    rgba(212, 168, 67, 0.05),
    rgba(212, 168, 67, 0.05) 10px,
    transparent 10px,
    transparent 20px
  ), var(--bg-panel);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--gold-line-strong);
  overflow: hidden;
}

.ph-icon {
  width: 34px;
  height: 34px;
  color: var(--gold);
  opacity: 0.8;
}

.ph-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  text-align: center;
  padding: 0 12px;
}
</style>
