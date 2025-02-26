<template>
  <div ref="editorRef"></div>
</template>

<script setup lang="ts">
import 'vditor/dist/index.css'
import Vditor from 'vditor'
import type { EditorOptions, EditorProps } from '@/components/Editor/types'

const props = withDefaults(defineProps<EditorProps>(), {})

const editorRef = ref()

const defaultOptions: EditorOptions = {
  rtl: false,
  mode: 'ir',
  value: '',
  debugger: false,
  typewriterMode: false,
  height: 'auto',
  minHeight: 400,
  width: 'auto',
  placeholder: '',
  fullscreen: { index: 90 },
  counter: {
    enable: false, // 默认值: false
    type: 'markdown' // 默认值: 'markdown'
  },
  link: {
    isOpen: true // 默认值: true
  },
  image: {
    isPreview: true // 默认值: true
  },
  cache: { enable: true, id: Math.random().toString(16).slice(2) },
  lang: 'zh_CN',
  theme: 'classic',
  icon: 'ant',
  cdn: 'https://unpkg.com/vditor@3.9.6'
}

onMounted(() => {
  new Vditor(editorRef.value, Object.assign(defaultOptions, props.options))
})
</script>

<style scoped></style>
