import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import I18n from "@/modules/i18n"
import './assets/main.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'

import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)



app.use(I18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
