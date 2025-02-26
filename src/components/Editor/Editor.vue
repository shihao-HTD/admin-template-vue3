<template>
  <div ref="editorRef"></div>
</template>

<script setup lang="ts">
import 'vditor/dist/index.css'
import Vditor from 'vditor'

const editorRef = ref()

onMounted(() => {
  new Vditor(editorRef.value, {
    mode: 'sv',
    cache: {
      id: Math.random().toString(36).slice(2)
    }
  })
})
</script>

<style scoped></style>
