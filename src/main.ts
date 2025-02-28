import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import I18n from '@/modules/i18n'
import './assets/main.scss'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
// import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'

import 'virtual:uno.css'
import 'virtual:svg-icons-register'
if (import.meta.env.MODE !== 'production') {
  import('element-plus/dist/index.css')
  import('element-plus/theme-chalk/dark/css-vars.css')
}

import ElementPlus from 'element-plus'
import { setupDirectives } from '@/directives'
import { setupPinia } from '@/store'

const app = createApp(App)

setupDirectives(app)

app.use(ElementPlus)

app.use(I18n)

setupPinia(app)

app.use(router)

app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
  console.error('捕获到错误：', err, '组件实例：', vm, '信息：', info)
}
