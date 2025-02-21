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

  <el-divider direction="horizontal" class="mt-10">
    <span class="text-gray-500"> 其他登录方式 </span>
  </el-divider>

  <div class="flex justify-around">
    <Iconify
      class="text-2xl text-gray-400 cursor-pointer hover:text-[var(--el-color-primary)]"
      :key="index"
      v-for="(item, index) in loginItems"
      :icon="item.icon"
      @click="handleClickItem"
    ></Iconify>
  </div>
</template>

<script setup lang="tsx">
import Iconify from '@/components/Icon/Iconify.vue'
import type { LoginFormProps, LoginItems } from '@/components/Form/type'
function getIcon(icon: string) {
  return () => <Iconify icon={icon} />
}

withDefaults(defineProps<LoginFormProps>(), {
  title: 'pages.login.welcome'
})

const emits = defineEmits(['clickIcon', 'submit'])

const form = reactive({
  username: '',
  password: '',
  repassword: '',
  phone: '',
  email: '',
  code: '',
  remember: false
})

function onSubmit() {
  emits('submit', form)
}

function handleClickItem(item: LoginItems) {
  emits('clickIcon', item)
}
</script>

<style scoped></style>
