import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './assets/styles/global.css';
import {
  fadeInDirective,
  fadeInStaggerDirective,
} from './composables/fadeInDirective';

export const createApp = ViteSSG(
  App,
  { routes: [{ path: '/', component: App }] },
  ({ app }) => {
    app.directive('fade-in', fadeInDirective);
    app.directive('fade-in-stagger', fadeInStaggerDirective);
  },
);
