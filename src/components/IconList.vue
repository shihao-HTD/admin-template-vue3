<template>
  <div>
    <component
      style="display: inline-block"
      :is="Icon"
      :icon="'ep:' + item"
      v-for="(item, index) in json"
      :key="index"
    >
    </component>
  </div>
</template>

<script setup lang="ts">
import json from './icon-ep.json'
import { Icon, loadIcons } from '@iconify/vue'

onBeforeMount(async () => {
  await loadIcons(json)
})
</script>

<style scoped></style>
