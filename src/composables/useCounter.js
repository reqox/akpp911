import { ref, onMounted, onUnmounted } from 'vue'

// Анимирует число от 0 до target, когда элемент, привязанный к targetRef, появляется во вьюпорте.
export function useCounter(targetValue, duration = 1600) {
  const displayValue = ref(0)
  const elRef = ref(null)
  let observer = null
  let started = false

  function animate() {
    if (started) return
    started = true
    const startTime = performance.now()

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      displayValue.value = Math.round(eased * targetValue)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        displayValue.value = targetValue
      }
    }
    requestAnimationFrame(step)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    if (elRef.value) observer.observe(elRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { displayValue, elRef }
}
