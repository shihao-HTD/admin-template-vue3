<template>
  <el-config-provider :locale="messages[locale]">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { registerSW } from 'virtual:pwa-register'

const { messages, locale } = useI18n()

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
