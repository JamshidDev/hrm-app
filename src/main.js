import 'vant/lib/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant'
import apiService from "@/service/apiService.js"
import i18n from '@/i18n/index.js'

import {ripple, mask} from "@/directives/index.js"

import App from './App.vue'
import router from './router'
window.$ApiService = apiService

const app = createApp(App)

app.directive('ripple', ripple)
app.directive('mask', mask)
app.use(createPinia())
app.use(router)
app.use(Vant)
app.use(i18n)
app.mount('#app')
