// src/composables/fadeInDirective.js
let observer = null;

function getObserver() {
  if (!observer && typeof window !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
  }
  return observer;
}

export const fadeInDirective = {
  mounted(el) {
    el.classList.add('fade-in');
    getObserver()?.observe(el);
  },
  unmounted(el) {
    getObserver()?.unobserve(el);
  },
};

export const fadeInStaggerDirective = {
  mounted(el) {
    el.classList.add('fade-in-stagger');
    getObserver()?.observe(el);
  },
  unmounted(el) {
    getObserver()?.unobserve(el);
  },
};
