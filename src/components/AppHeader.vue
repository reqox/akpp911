<script setup>
import { ref } from 'vue'
import IconGear from './icons/IconGear.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'
import IconTelegram from './icons/IconTelegram.vue'
import IconPhone from './icons/IconPhone.vue'
import IconMenu from './icons/IconMenu.vue'
import IconClose from './icons/IconClose.vue'
import { CONTACTS, NAV_LINKS } from '../config/siteData'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#top" class="logo" @click="closeMenu">
        <span class="logo-icon">
          <IconGear />
        </span>
        <span class="logo-text">
          <span class="logo-name">АКПП<span class="text-gold-shimmer">911</span></span>
          <span class="logo-slogan">Ремонт трансмиссий любой сложности</span>
        </span>
      </a>

      <nav class="nav nav-desktop">
        <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header-contacts">
        <a :href="CONTACTS.phoneHref" class="phone-link">
          <IconPhone class="icon-sm" />
          {{ CONTACTS.phoneDisplay }}
        </a>
        <div class="messengers">
          <a :href="CONTACTS.whatsappHref" target="_blank" rel="noopener" aria-label="Написать в WhatsApp" class="messenger-icon wa">
            <IconWhatsapp />
          </a>
          <a :href="CONTACTS.telegramHref" target="_blank" rel="noopener" aria-label="Написать в Telegram" class="messenger-icon tg">
            <IconTelegram />
          </a>
        </div>
        <a href="#contacts" class="btn btn-gold btn-header">Заказать звонок</a>
      </div>

      <button class="burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Открыть меню">
        <IconClose v-if="menuOpen" />
        <IconMenu v-else />
      </button>
    </div>

    <transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu">
        <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href" class="mobile-link" @click="closeMenu">
          {{ link.label }}
        </a>
        <a :href="CONTACTS.phoneHref" class="mobile-link mobile-phone">
          <IconPhone class="icon-sm" /> {{ CONTACTS.phoneDisplay }}
        </a>
        <div class="mobile-messengers">
          <a :href="CONTACTS.whatsappHref" target="_blank" rel="noopener" class="messenger-icon wa"><IconWhatsapp /></a>
          <a :href="CONTACTS.telegramHref" target="_blank" rel="noopener" class="messenger-icon tg"><IconTelegram /></a>
        </div>
        <a href="#contacts" class="btn btn-gold" @click="closeMenu">Заказать звонок</a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gold-line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 76px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  animation: slow-spin 14s linear infinite;
}

@keyframes slow-spin {
  to { transform: rotate(360deg); }
}

.logo-icon svg {
  width: 100%;
  height: 100%;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo-name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 19px;
  color: var(--text-primary);
}

.logo-slogan {
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  display: none;
}

@media (min-width: 640px) {
  .logo-slogan { display: block; }
}

.nav-desktop {
  display: none;
  gap: 26px;
}

@media (min-width: 1024px) {
  .nav-desktop { display: flex; }
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: var(--gold-light);
}

.header-contacts {
  display: none;
  align-items: center;
  gap: 18px;
}

@media (min-width: 1024px) {
  .header-contacts { display: flex; }
}

.phone-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: var(--text-primary);
  white-space: nowrap;
}

.icon-sm {
  width: 17px;
  height: 17px;
  color: var(--gold);
  flex-shrink: 0;
}

.messengers {
  display: flex;
  gap: 8px;
}

.messenger-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gold-line);
  color: var(--gold-light);
  transition: transform 0.2s, border-color 0.2s;
}

.messenger-icon svg {
  width: 18px;
  height: 18px;
}

.messenger-icon:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.btn-header {
  padding: 11px 22px;
  font-size: 13px;
}

.burger {
  display: flex;
  background: none;
  color: var(--text-primary);
  width: 34px;
  height: 34px;
}

.burger svg { width: 100%; height: 100%; }

@media (min-width: 1024px) {
  .burger { display: none; }
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 15px 26px;
  border-top: 1px solid var(--gold-line);
  background: var(--bg-primary);
}

.mobile-link {
  padding: 12px 6px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.mobile-messengers {
  display: flex;
  gap: 10px;
  padding: 10px 6px;
}

.mobile-menu .btn {
  margin-top: 8px;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
