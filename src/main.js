import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import { fadeInDirective, fadeInStaggerDirective } from './composables/fadeInDirective'

const app = createApp(App)
app.directive('fade-in', fadeInDirective)
app.directive('fade-in-stagger', fadeInStaggerDirective)
app.mount('#app')
