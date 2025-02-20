<template>
  <div>
    <el-form :model="form" label-width="120px">
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
        <el-form-item label="Remember Me">
          <el-checkbox v-model="form.remember" name="type"></el-checkbox>
        </el-form-item>
        <el-link type="primary">Sign Up</el-link>
      </el-row>

      <el-form-item>
        <el-button @click="onSubmit" type="primary">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="tsx">
import type { IconifyIcon } from '@iconify/vue'
import Iconify from '@/components/Icon/Iconify.vue'

function getIcon(icon: string) {
  return () => <Iconify icon={icon} />
}

interface LoginItems {
  url: string
  icon: string | IconifyIcon
}

interface LoginFormProps {
  position: 'left' | 'right' | 'center'
  title?: string
  loginItems: LoginItems[]
}

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
