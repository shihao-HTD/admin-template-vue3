<template>
  <div ref="editorRef"></div>
</template>

<script setup lang="ts">
import 'vditor/dist/index.css'
import Vditor from 'vditor'
import type { EditorOptions, EditorProps } from '@/components/Editor/types'

const props = withDefaults(defineProps<EditorProps>(), {})

const editorRef = ref()
const editorInstance = shallowRef<Vditor>()

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
const modelValue = defineModel()

const emits = defineEmits(['init'])

watch(modelValue, (newVal) => {
  if (editorInstance.value && newVal && `${newVal}` !== editorInstance.value.getValue()) {
    editorInstance.value.setValue(newVal + '')
  }
})

onMounted(() => {
  const defaultAfter = props.options.after
  const defaultInput = props.options.input

  editorInstance.value = new Vditor(
    editorRef.value,
    Object.assign(defaultOptions, {
      ...props.options,
      after() {
        defaultAfter && defaultAfter()
        modelValue.value = editorInstance.value?.getHTML()
      },
      input(value) {
        defaultInput && defaultInput(value)
        modelValue.value = value
      }
    })
  )
  emits('init', editorInstance.value)
  modelValue.value = props.options.value
})

onBeforeMount(() => {
  editorInstance.value && editorInstance.value.destroy()
})
</script>

<style scoped></style>
