<template>
  <div class="mb-2 flex justify-end items-center w-full">
    <div class="mr-4">
      <el-checkbox v-model="copyIconComponentFlag" label="复制Icon组件" size="large" />
    </div>
    <div class="mr-4">
      <el-switch v-model="copyTypeFlag" active-text="复制Icon名称" inactive-text="复制SVG图标" />
    </div>
    <div class="mr-4">
      <el-switch v-model="showTextFlag" active-text="显示文字" inactive-text="隐藏文字" />
    </div>
  </div>

  <IconList :show-text="showTextFlag" @click="handleClick"></IconList>
</template>

<script setup lang="ts">
import { loadIcon } from '@iconify/vue'
import { ElMessage } from 'element-plus'

definePage({
  meta: {
    title: '图标列表',
    // icon: 'mdi:user'
  }
})

const copyIconComponentFlag = ref(true)
const showTextFlag = ref(true)

// false->copySvgName   true->copyName
const copyTypeFlag = ref(true)

const source = ref('')
const { copy } = useClipboard({ source })

async function handleClick(icon: string) {
  if (copyIconComponentFlag.value) {
    source.value = `<div class="i-ep:${icon}"></div>`
  } else if (copyTypeFlag.value) {
    source.value = toPascalCase(icon)
  } else {
    const res = await loadIcon('ep:' + icon)
    source.value = objectToSvg(res)
  }
  await copy()
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}

function objectToSvg(svgObject: any) {
  const { body, hFlip, height, left, rotate, top, vFlip, width } = svgObject
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" transform="translate(${left},${top}) rotate(${rotate})${
    hFlip ? ' scale(-1, 1)' : ''
  }${vFlip ? ' scale(1, -1)' : ''}">
        ${body}
    </svg>`
  return svgString
}

function toPascalCase(input: string): string {
  return input
    .split('-') // 按照连字符分割字符串
    .map((word) => {
      // 将每个子字符串的首字母大写
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('') // 拼接成一个新的字符串
}
</script>

<style scoped></style>
