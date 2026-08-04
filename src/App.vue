<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ModelsSection from './components/ModelsSection.vue'
import PricingSection from './components/PricingSection.vue'
import StatsSection from './components/StatsSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import StepsSection from './components/StepsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <HeroSection />
      <div class="gear-divider" aria-hidden="true" />
      <ServicesSection />
      <ModelsSection />
      <div class="gear-divider" aria-hidden="true" />
      <PricingSection />
      <StatsSection />
      <div class="gear-divider" aria-hidden="true" />
      <WhyUsSection />
      <ReviewsSection />
      <StepsSection />
      <div class="gear-divider" aria-hidden="true" />
      <ContactsSection />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page {
  position: relative;
}
</style>
