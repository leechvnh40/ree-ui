import { createApp } from 'vue'
import App from './App.vue'
// 引入index.js
// import {reLink} from '../packages';
// import {reButton} from '../packages';
import reUI from '../packages'


createApp(App).use(reUI).mount('#app')

