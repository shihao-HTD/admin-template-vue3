<template>
  <div>
    <v-form :model="form"></v-form>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    title: 'pages.form-basic',
    icon: 'fluent:form-multiple-28-regular'
  }
})

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

</script>

<style scoped></style>
