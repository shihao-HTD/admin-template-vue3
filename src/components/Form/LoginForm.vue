<template>
  <!-- form -->
  <el-form ref="formRef" :rules="rules" :model="form" class="min-w-[450px]">
    <el-form-item prop="username">
      <el-input
        v-model="form.username"
        :placeholder="$t('pages.login.username')"
        :prefix-icon="getIcon('ep:user')"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="form.password"
        :placeholder="$t('pages.login.password')"
        :prefix-icon="getIcon('ep:lock')"
      />
    </el-form-item>

    <el-form-item prop="repassword">
      <el-input
        type="password"
        v-model="form.repassword"
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
import type { FormInstance, FormRules } from 'element-plus'
function getIcon(icon: string) {
  return () => <Iconify icon={icon} />
}

withDefaults(defineProps<LoginFormProps>(), {
  title: 'pages.login.welcome'
})

const emits = defineEmits(['clickIcon', 'submit'])

interface LoginFormInterface {
  username: string
  password: string
  repassword: string
  phone: string | number
  email: string
  code: string
  remember: boolean
}

const formRef = ref<FormInstance>()

const form = reactive<LoginFormInterface>({
  username: '',
  password: '',
  repassword: '',
  phone: '',
  email: '',
  code: '',
  remember: false
})

const validatePass = useDebounceFn((rule: any, value: any, callback: any) => {
  if (value.trim() === '') {
    callback(new Error('请输入密码'))
  } else if (value !== form.repassword) {
    callback('两次输入密码不一致')
  } else {
    if (!formRef.value) {
      return
    }
    formRef.value.validateField('repassword')
    callback()
  }
}, 200)
const validatePass2 = useDebounceFn((rule: any, value: any, callback: any) => {
  if (value.trim() === '') {
    callback(new Error('请输入再次密码'))
  } else if (value !== form.password) {
    callback(new Error('两次输入密码不一致'))
  } else {
    if (!formRef.value) {
      return
    }
    formRef.value.validateField('password')
    callback()
  }
}, 300)

const rules = ref<FormRules<LoginFormInterface>>({
  username: [
    { required: true, message: '用户名未设置' },
    {
      min: 6,
      max: 16,
      message: '用户名格式不正确'
    }
  ],
  password: [
    {
      min: 6,
      max: 32,
      message: '请输入密码'
    },
    {
      asyncValidator: validatePass,
      trigger: ['change', 'blur']
    }
  ],
  repassword: [
    {
      min: 6,
      max: 32,
      message: '请输入密码'
    },
    {
      asyncValidator: validatePass2,
      trigger: ['change', 'blur']
    }
  ]
})

async function onSubmit() {
  if (formRef.value) {
    await formRef.value.validate()
    emits('submit', form)
  }
}

function handleClickItem(item: LoginItems) {
  emits('clickIcon', item)
}
</script>

<style scoped></style>
