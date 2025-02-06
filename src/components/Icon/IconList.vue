<template>
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(1.825rem,1fr))] border-l border-t rounded">
    <li
      :class="[
        'border-r border-b flex flex-col items-center justify-center cursor-pointer',
        itemClass
      ]"
      v-for="(item, index) in json"
      :key="index"
      @click="handleClick(item, index)"
    >
      <component
        :class="[
          iconClass,
          {
            [activeClass]:
              (modelValue && modelValue === `${collection}:${item}`) || choose === index
          }
        ]"
        :is="Icon"
        :icon="`${collection}:${item}`"
      >
      </component>

      <div class="text-sm" v-if="showText">
        {{ toPascalCase(item) }}
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Icon, loadIcons } from '@iconify/vue'
import json from './icon-ep.json'
import type { IconListType } from '@/components/Icon/type'

const modelValue = defineModel({
  type: String,
  default: ''
})
const emits = defineEmits(['click'])
const props = withDefaults(defineProps<IconListType>(), {
  iconData: () => json,
  collection: 'ep',
  iconClass: 'text-3xl mb-3',
  itemClass: 'hover:bg-sky-100 py-4 w-1/8',
  activeClass: ''
})

const choose = ref(-1)

async function handleClick(icon: string, index: number) {
  choose.value = index
  modelValue.value = `${props.collection}':'${icon}`
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
