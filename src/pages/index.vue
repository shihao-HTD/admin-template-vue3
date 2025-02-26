<template>
  <div>
    <el-button v-debounce="test">test</el-button>
    <el-button v-throttle="test">test2</el-button>

    <el-button type="primary" v-has.not="['admin']">BTN</el-button>
    <el-button type="primary" @click="handleClick">add roles</el-button>
    <el-button type="primary" @click="() => toggle()">toggle</el-button>

    <CollapseTransition>
      <div class="w-20 border border-color-red pt-10 pb-10" v-show="show">
        <div class="h-[150px] overflow-y-auto">
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import useUserStore from '@/store/user'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})
const store = useUserStore()

const [show, toggle] = useToggle(true)

function handleClick() {
  store.roles = ['user', 'admin']
}

function test() {
  console.log('xxxxxxxxxxx')
}

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
