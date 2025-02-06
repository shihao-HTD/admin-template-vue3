<template>
  <ul class="flex flex-wrap border rounded">
    <li
      :class="[
        'border-r border-b flex flex-col items-center justify-center cursor-pointer',
        itemClass
      ]"
      v-for="(item, index) in json"
      :key="index"
      @click="handleClick(item)"
    >
      <component :class="iconClass" :is="Icon" :icon="collection + ':' + item"> </component>

      <div class="text-sm" v-if="showText">
        {{ toPascalCase(item) }}
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Icon, loadIcons } from '@iconify/vue'
import json from './icon-ep.json'

interface IconListType {
  iconData: string[]
  collection: string
  iconClass: string
  itemClass: string
  showText: boolean
}

const emits = defineEmits(['click'])
const props = withDefaults(defineProps<IconListType>(), {
  iconData: () => json,
  collection: 'ep',
  iconClass: 'text-3xl mb-3',
  itemClass: 'hover:bg-sky-100 py-4 w-1/8'
})

async function handleClick(icon: string) {
  emits('click', icon)
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

onBeforeMount(async () => {
  props.iconData && props.iconData.length && (await loadIcons(props.iconData))
})
</script>

<style scoped></style>
