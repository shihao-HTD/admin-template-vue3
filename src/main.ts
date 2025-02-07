import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'

import 'element-plus/theme-chalk/dark/css-vars.css'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: 'hello world'
    },
    zh: {
      hello: '你好世界'
    }
  }
})

app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
