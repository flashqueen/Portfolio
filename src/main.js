import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/modern-normalize.css'
import './assets/main.css'
import './assets/utils.css'

import lazyLoading from './utils/lazy-loading';

lazyLoading();
createApp(App).use(router).mount('#app')

