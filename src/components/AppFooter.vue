<script setup>
import IconGear from './icons/IconGear.vue';
import { NAV_LINKS, CONTACTS } from '../config/siteData';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <a href="#top" class="footer-logo">
        <IconGear class="footer-icon" />
        <span>АКПП<span class="text-gold-shimmer">911</span></span>
      </a>

      <nav class="footer-links">
        <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href">{{
          link.label
        }}</a>
      </nav>

      <div class="footer-meta">
        <span>© {{ year }} АКПП911. Все права защищены.</span>
        <a :href="CONTACTS.phoneHref" class="footer-phone">{{
          CONTACTS.phoneDisplay
        }}</a>
        <a href="/politika_konfidencialnosti.pdf" download class="footer-policy"
          >Политика конфиденциальности</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--gold-line);
  padding: 40px 0;
  background: var(--bg-deep);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
}

@media (min-width: 900px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
  color: var(--text-primary);
}

.footer-icon {
  width: 22px;
  height: 22px;
  color: var(--gold);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  font-size: 13px;
}

.footer-links a {
  color: var(--text-muted);
}

.footer-links a:hover {
  color: var(--gold-light);
}

.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  color: var(--text-muted);
  align-items: center;
}

@media (min-width: 900px) {
  .footer-meta {
    align-items: flex-end;
  }
}

.footer-phone {
  color: var(--text-secondary);
  font-weight: 600;
}

.footer-policy {
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
