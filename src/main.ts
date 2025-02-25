import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import I18n from '@/modules/i18n'
import './assets/main.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
// import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'

import 'virtual:uno.css'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'

import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import { setupDirectives } from '@/directives'

const app = createApp(App)

setupDirectives(app)

app.use(ElementPlus)

app.use(I18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
