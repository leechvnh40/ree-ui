import { createApp } from 'vue'
import App from './App.vue'
// 引入index.js
import reeUi from '../packages';

createApp(App).use(reeUi).mount('#app')

