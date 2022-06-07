import { createApp } from 'vue'
import App from './App.vue'
// 引入index.js
import {lyLink} from '../packages';

createApp(App).use(lyLink).mount('#app')

