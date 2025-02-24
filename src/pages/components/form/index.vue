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

const schema = ref([
  { prop: 'name', value: '', label: 'Activity name', type: 'input' },
  {
    prop: 'region',
    value: '',
    label: 'Activity zone',
    type: 'select',
    children: [
      {
        label: 'Zone one',
        value: 'shanghai'
      },
      {
        label: 'Zone two',
        value: 'beijing'
      }
    ]
  },
  {
    prop: '',
    label: 'Activity time',
    schema: [
      {
        span: 11,
        prop: 'date1',
        value: '',
        type: 'date-picker',
        label: 'Pick a date',
        attrs: {
          type: 'date',
          placeholder: 'Pick a date',
          style: {
            width: '100%'
          }
        }
      },
      {
        span: 2,
        value: '-',
        attrs: {
          class: 'text-center w-full'
        }
      },
      {
        span: 11,
        type: 'time-picker',
        prop: 'date2',
        value: '',
        label: 'Pick a time',
        attrs: {
          placeholder: 'Pick a time',
          style: {
            width: '100%'
          }
        }
      }
    ]
  },
  { prop: 'delivery', value: false, label: 'Instant delivery', type: 'switch' },
  {
    prop: 'type',
    value: [],
    label: 'Activity type',
    type: 'checkbox',
    children: [
      {
        label: 'Online activities',
        name: 'type'
      },
      {
        label: 'Promotion activities',
        name: 'type'
      },
      {
        label: 'Offline activities',
        name: 'type'
      },
      {
        label: 'Simple brand exposure',
        name: 'type'
      }
    ]
  },
  {
    type: 'radio',
    prop: 'resource',
    label: 'Resources',
    value: '',
    children: [
      {
        label: 'Sponsor',
        value: 1
      },
      {
        label: 'Venue',
        value: 2
      }
    ]
  },
  {
    type: 'input',
    prop: 'desc',
    value: '',
    attrs: {
      type: 'textarea'
    }
  }
] as FormSchema)

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
