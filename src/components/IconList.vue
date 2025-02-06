<template>
  <ul class="flex flex-wrap border rounded">
    <li
      class="w-1/8 border-r border-b flex flex-col items-center justify-center cursor-pointer hover:bg-sky-100 py-4"
      v-for="(item, index) in json"
      :key="index"
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
import { Icon, loadIcons } from '@iconify/vue'

function toPascalCase(input: string): string {
  return input
    .split('-') // 按照连字符分割字符串
    .map((word) => {
      // 将每个子字符串的首字母大写
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('') // 拼接成一个新的字符串
}

onBeforeMount(async () => {
  await loadIcons(json)
})
</script>

<style scoped></style>
