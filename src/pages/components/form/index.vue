<template>
  <div>
    <VForm v-model="model" :schema="schema"></VForm>
    {{ formValue }}
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/Form/type'
import { useForm } from '@/components/Form/useForm'

definePage({
  meta: {
    title: 'pages.form-basic',
    icon: 'fluent:form-multiple-28-regular'
  }
})

const schema = ref([
  {
    prop: 'name',
    value: '',
    label: 'Activity name',
    type: 'input',
    rules: [
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
    ]
  },
  {
    prop: 'region',
    value: '',
    label: 'Activity zone',
    type: 'select',
    rules: [
      {
        required: true,
        message: 'Please select Activity zone'
      }
    ],
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
        },
        rules: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ]
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
        },
        rules: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change'
          }
        ]
      }
    ]
  },
  { prop: 'delivery', value: false, label: 'Instant delivery', type: 'switch' },
  {
    prop: 'type',
    value: [],
    label: 'Activity type',
    type: 'checkbox',
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change'
      }
    ],
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
    ],
    rules: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change'
      }
    ]
  },
  {
    type: 'input',
    prop: 'desc',
    value: '',
    attrs: {
      type: 'textarea'
    },
    rules: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
  }
] as FormSchema)

const { model, formValue } = useForm(schema.value)

// do not use same name with ref
</script>

<style scoped></style>
