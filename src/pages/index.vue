<template>
  <div>home</div>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <Icon icon="mdi:home" class="c-sky text-3xl"></Icon>

  <SvgIcon type="advice" class="text-sky w-5 h-5"></SvgIcon>

  <!--  <i class="iconfont icon-cangshu"></i>-->
  <NetIcon url="//at.alicdn.com/t/c/font_4821237_or03y9sxpf.css" type="cangshu"></NetIcon>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { Icon } from '@iconify/vue'

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
