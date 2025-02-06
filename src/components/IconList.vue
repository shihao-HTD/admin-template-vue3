<template>
  <div>
    <el-switch v-model="copyTypeFlag" active-text="复制icon名称" inactive-text="复制SVG图标" />
  </div>

  <ul class="flex flex-wrap border rounded">
    <li
      class="w-1/8 border-r border-b flex flex-col items-center justify-center cursor-pointer hover:bg-sky-100 py-4"
      v-for="(item, index) in json"
      :key="index"
      @click="handleClick(item)"
    >
      <component class="text-3xl mb-3" :is="Icon" :icon="'ep:' + item"> </component>

      <div class="text-sm">
        {{ toPascalCase(item) }}
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import json from './icon-ep.json'
import { Icon, loadIcons, loadIcon } from '@iconify/vue'
import { ElMessage } from 'element-plus'

// false->copySvgName   true->copyName
const copyTypeFlag = ref(true)
const source = ref('')
const { copy, copied } = useClipboard({ source })

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

async function handleClick(icon: string) {
  if (copyTypeFlag.value) {
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

onBeforeMount(async () => {
  await loadIcons(json)
})
</script>

<style scoped></style>
