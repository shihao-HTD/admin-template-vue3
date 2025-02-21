<template>
  <LoginForm @submit="handleSubmit" :loginItems="loginItems"></LoginForm>
</template>

<script setup lang="tsx">
import LoginForm from '@/components/Form/LoginForm.vue'

definePage({
  meta: {
    title: '登录注册',
    layout: 'singe-page',
    meta: '登录注册页',
    hideMenu: true,
    position: 'right'
    // backgroundImage: 'https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_1280.jpg'
    // backgroundImage:'url'
  }
})

const loginItems = ref([
  {
    icon: 'ic:baseline-wechat',
    url: ''
  },
  {
    icon: 'cib:tencent-qq',
    url: ''
  },
  {
    icon: 'bi:sina-weibo',
    url: ''
  },
  {
    icon: 'mdi:github',
    url: ''
  }
])

function handleSubmit(form: any) {
  console.log('=>(login.vue:40) form', form)
}
</script>

<style scoped></style>
