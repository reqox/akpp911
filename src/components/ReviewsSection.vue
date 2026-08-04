<script setup>
import { ref } from 'vue'
import IconStar from './icons/IconStar.vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import PhotoPlaceholder from './PhotoPlaceholder.vue'
import { REVIEWS } from '../config/siteData'

const track = ref(null)

function scrollByCard(direction) {
  if (!track.value) return
  const card = track.value.querySelector('.review-card')
  const gap = 18
  const distance = card ? card.offsetWidth + gap : 320
  track.value.scrollBy({ left: direction * distance, behavior: 'smooth' })
}
</script>

<template>
  <section id="reviews" class="section reviews">
    <div class="container">
      <div class="reviews-header" v-fade-in>
        <div>
          <p class="eyebrow">Отзывы клиентов</p>
          <h2 class="section-title">
            Что говорят <span class="accent">владельцы автомобилей и яхт</span>
          </h2>
        </div>
        <div class="reviews-nav">
          <button class="nav-btn" @click="scrollByCard(-1)" aria-label="Предыдущий отзыв">
            <IconChevronRight class="rotate-180" />
          </button>
          <button class="nav-btn" @click="scrollByCard(1)" aria-label="Следующий отзыв">
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div ref="track" class="reviews-track">
        <article v-for="review in REVIEWS" :key="review.name" class="review-card card-panel">
          <div class="review-top">
            <div class="review-avatar">
              <PhotoPlaceholder label="Фото" ratio="1 / 1" />
            </div>
            <div>
              <div class="review-name">{{ review.name }}</div>
              <div class="review-car">{{ review.car }}</div>
            </div>
          </div>
          <div class="review-stars">
            <IconStar v-for="n in 5" :key="n" :class="['star', { dim: n > review.rating }]" />
          </div>
          <p class="review-text">{{ review.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}

.reviews-nav {
  display: flex;
  gap: 10px;
}

.nav-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--gold-line-strong);
  background: transparent;
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.nav-btn svg { width: 18px; height: 18px; }
.rotate-180 { transform: rotate(180deg); }

.nav-btn:hover {
  background: rgba(212, 168, 67, 0.1);
}

.reviews-track {
  display: flex;
  gap: 18px;
  margin-top: 42px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--gold-line-strong) transparent;
}

.review-card {
  scroll-snap-align: start;
  flex: 0 0 300px;
  padding: 26px;
}

@media (min-width: 640px) {
  .review-card { flex-basis: 340px; }
}

.review-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.review-avatar {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.review-avatar :deep(.photo-placeholder) {
  border-radius: 50%;
}

.review-avatar :deep(.ph-icon) {
  width: 18px;
  height: 18px;
}

.review-avatar :deep(.ph-label) {
  display: none;
}

.review-name {
  font-weight: 700;
  font-size: 15px;
  color: var(--text-primary);
}

.review-car {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}

.review-stars {
  display: flex;
  gap: 3px;
  margin-bottom: 12px;
}

.star {
  width: 15px;
  height: 15px;
  color: var(--gold);
}

.star.dim {
  color: var(--gold-line);
}

.review-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}
</style>
