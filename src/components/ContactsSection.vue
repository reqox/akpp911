<script setup>
import { reactive, ref } from 'vue';
import IconPhone from './icons/IconPhone.vue';
import IconMapPin from './icons/IconMapPin.vue';
import IconClock from './icons/IconClock.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';
import IconTelegram from './icons/IconTelegram.vue';
import { CONTACTS } from '../config/siteData';

const form = reactive({ name: '', phone: '', message: '', consent: false });
const errors = reactive({ name: '', phone: '', consent: '' });

const status = ref('idle'); // idle | success | loading | error
const errorMessage = ref('');

function validate() {
  errors.name = form.name.trim().length < 2 ? 'Укажите имя' : '';
  const cleanPhone = form.phone.replace(/\D/g, '');
  const isValidPhone =
    (cleanPhone.length === 11 &&
      (cleanPhone.startsWith('7') || cleanPhone.startsWith('8'))) ||
    (cleanPhone.length === 10 && cleanPhone.startsWith('9'));
  errors.phone = isValidPhone
    ? ''
    : 'Введите корректный номер телефона (10 или 11 цифр)';
  errors.consent = form.consent ? '' : 'Нужно согласие на обработку данных';
  return !errors.name && !errors.phone && !errors.consent;
}

async function submit() {
  if (!validate()) return;
  status.value = 'loading';

  try {
    const response = await fetch('no', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        message: form.message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      status.value = 'success';
      // Очищаем форму только при успехе
      form.name = '';
      form.phone = '';
      form.message = '';
      form.consent = false;
    } else {
      throw new Error(result.message || 'Ошибка сервера при отправке');
    }
  } catch (err) {
    console.error('Ошибка отправки:', err);
    status.value = 'error';
    errorMessage.value =
      'Не удалось отправить форму. Пожалуйста, позвоните нам напрямую.';
  }
}
</script>

<template>
  <section id="contacts" class="section contacts">
    <div class="container">
      <div v-fade-in>
        <p class="eyebrow">Контакты</p>
        <h2 class="section-title">
          Заедьте на <span class="accent">бесплатную диагностику</span> уже
          сегодня
        </h2>
      </div>

      <div class="contacts-grid">
        <div class="contacts-info card-panel" v-fade-in>
          <iframe
            class="map-frame"
            :src="CONTACTS.mapEmbedSrc"
            title="Карта расположения СТО"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />

          <div class="info-rows">
            <div class="info-row">
              <IconMapPin class="info-icon" />
              <span>{{ CONTACTS.address }}</span>
            </div>
            <div class="info-row">
              <IconPhone class="info-icon" />
              <a :href="CONTACTS.phoneHref">{{ CONTACTS.phoneDisplay }}</a>
            </div>
            <div class="info-row">
              <IconClock class="info-icon" />
              <span>{{ CONTACTS.workingHours }}</span>
            </div>
          </div>

          <div class="messenger-cta">
            <a
              :href="CONTACTS.whatsappHref"
              target="_blank"
              rel="noopener"
              class="btn btn-outline msg-btn"
            >
              <IconWhatsapp class="icon-sm" /> Написать в WhatsApp
            </a>
            <a
              :href="CONTACTS.telegramHref"
              target="_blank"
              rel="noopener"
              class="btn btn-outline msg-btn"
            >
              <IconTelegram class="icon-sm" /> Написать в Telegram
            </a>
          </div>
        </div>

        <form
          class="contacts-form card-panel"
          v-fade-in
          @submit.prevent="submit"
        >
          <h3 class="form-title">Оставить заявку</h3>
          <p class="form-lead">
            Перезвоним и запишем на бесплатную диагностику.
          </p>

          <label class="field">
            <span class="field-label">Имя</span>
            <input
              v-model="form.name"
              type="text"
              class="field-input"
              placeholder="Как к вам обращаться"
            />
            <span v-if="errors.name" class="field-error">{{
              errors.name
            }}</span>
          </label>

          <label class="field">
            <span class="field-label">Телефон</span>
            <input
              v-model="form.phone"
              type="tel"
              class="field-input"
              placeholder="+7 (___) ___-__-__"
            />
            <span v-if="errors.phone" class="field-error">{{
              errors.phone
            }}</span>
          </label>

          <label class="field">
            <span class="field-label">Сообщение (необязательно)</span>
            <textarea
              v-model="form.message"
              class="field-input field-textarea"
              rows="3"
              placeholder="Опишите проблему"
            ></textarea>
          </label>

          <label class="field field-checkbox">
            <input v-model="form.consent" type="checkbox" />
            <span>Согласен(на) на обработку персональных данных</span>
          </label>
          <span v-if="errors.consent" class="field-error">{{
            errors.consent
          }}</span>

          <button type="submit" class="btn btn-gold form-submit">
            Отправить заявку
          </button>

          <p v-if="status === 'success'" class="form-success">
            Заявка принята! Мы свяжемся с вами в ближайшее время.
          </p>
          <p v-if="status === 'loading'" class="form-success">Отправка...</p>
          <p v-if="status === 'error'" class="form-error">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 42px;
}

@media (min-width: 900px) {
  .contacts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.contacts-info,
.contacts-form {
  padding: 26px;
}

.map-frame {
  width: 100%;
  height: 220px;
  border: 0;
  border-radius: var(--radius-sm);
  filter: grayscale(0.3) invert(0.92) contrast(0.9);
}

.info-rows {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
}

.info-icon {
  width: 19px;
  height: 19px;
  color: var(--gold);
  flex-shrink: 0;
}

.messenger-cta {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.msg-btn {
  width: 100%;
}

.icon-sm {
  width: 17px;
  height: 17px;
}

.form-title {
  font-size: 20px;
  font-weight: 800;
}

.form-lead {
  margin-top: 6px;
  font-size: 13px;
  color: var(--text-muted);
}

.field {
  display: block;
  margin-top: 18px;
}

.field-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 7px;
}

.field-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--gold-line);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 14px;
}

.field-input:focus {
  border-color: var(--gold);
  outline: none;
}

.field-textarea {
  resize: vertical;
}

.field-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12.5px;
  color: var(--text-muted);
}

.field-checkbox input {
  margin-top: 3px;
}

.field-error {
  display: block;
  color: var(--danger);
  font-size: 12px;
  margin-top: 5px;
}

.form-submit {
  width: 100%;
  margin-top: 22px;
}

.form-success,
.form-error {
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
}
.form-success {
  color: var(--success);
}
.form-error {
  color: var(--danger);
}
</style>
