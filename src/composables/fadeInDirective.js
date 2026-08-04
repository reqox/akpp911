// Директива v-fade-in: добавляет класс is-visible, когда элемент входит во вьюпорт.
// Используется вместе с классами .fade-in / .fade-in-stagger из global.css

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

export const fadeInDirective = {
  mounted(el) {
    el.classList.add('fade-in')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}

export const fadeInStaggerDirective = {
  mounted(el) {
    el.classList.add('fade-in-stagger')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
