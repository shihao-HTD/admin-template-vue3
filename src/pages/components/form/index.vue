<template>
  <div>
    <v-form :model="form" :schema="schema"></v-form>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/Form/type'

definePage({
  meta: {
    title: 'pages.form-basic',
    icon: 'fluent:form-multiple-28-regular'
  }
})

const schema = [
  { prop: 'name', label: 'Name', type: 'radio' },
  { prop: 'name', label: 'Checkbox', type: 'checkbox' },
  { prop: 'name', label: 'Time', type: 'time-picker' },
  { prop: 'name', label: 'Date', type: 'date-picker' },
  { prop: 'name', label: 'Switch', type: 'switch' }
] as FormSchema

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped></style>
