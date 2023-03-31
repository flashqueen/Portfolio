import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/modern-normalize.css'
import './assets/main.css'
import './assets/utils.css'

createApp(App).use(router).mount('#app')

