<template>
  <el-tabs type="card" class="myTabs" closable>
    <el-tab-pane
      v-for="item in data"
      :label="$t(item.meta?.title)"
      :name="item.name as string"
      :key="item.name"
      >User</el-tab-pane
    >
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabsProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'

interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}
defineProps<HeaderTabsProps>()
</script>

<style scoped></style>
