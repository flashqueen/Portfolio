import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from '../i18n';

import './assets/modern-normalize.css'
import './assets/main.css'
import './assets/utils.css'

import lazyLoading from './utils/lazy-loading';


createApp(App).use(router).use(i18n).mount('#app')
lazyLoading();

