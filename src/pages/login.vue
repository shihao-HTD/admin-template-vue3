<template>
  <!-- form -->
  <el-form :model="form" class="min-w-[450px]">
    <el-form-item>
      <el-input
        v-model="form.username"
        :placeholder="$t('pages.login.username')"
        :prefix-icon="getIcon('ep:user')"
      />
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="form.password"
        :placeholder="$t('pages.login.password')"
        :prefix-icon="getIcon('ep:lock')"
      />
    </el-form-item>
    <el-row class="items-center justify-between">
      <el-form-item>
        <el-checkbox :label="$t('pages.login.remember')" v-model="form.remember" name="type" />
      </el-form-item>
      <el-link type="primary">{{ $t('pages.login.sign-up') }}</el-link>
    </el-row>
    <el-form-item>
      <!-- 登录 -->
      <el-button type="primary" @click="onSubmit" class="w-full mt-4">{{
        $t('pages.login.submit')
      }}</el-button>
    </el-form-item>
  </el-form>
  <!-- 第三方登录 -->
</template>

<script setup lang="tsx">
import type { IconifyIcon } from '@iconify/vue'
import Iconify from '@/components/Icon/Iconify.vue'

function getIcon(icon: string) {
  return () => <Iconify icon={icon} />
}
definePage({
  meta: {
    title: '登录注册',
    layout: 'singe-page',
    meta: '登录注册页',
    hideMenu: true,
    position: 'right',
    // backgroundImage: 'https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_1280.jpg'
    // backgroundImage:'url'
  }
})

interface LoginItems {
  url: string
  icon: string | IconifyIcon
}

interface LoginFormProps {
  position: 'left' | 'right' | 'center'
  title?: string
  loginItems: LoginItems[]
}

defineProps<LoginFormProps>()

const form = reactive({
  username: '',
  password: '',
  repassword: '',
  phone: '',
  email: '',
  code: '',
  remember: false
})

function onSubmit() {}
</script>

<style scoped></style>
