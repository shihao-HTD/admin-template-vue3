<template>
  <el-dropdown>
    <el-avatar> </el-avatar>

    <span> 用户名称 </span>
    <template #dropdown>
      <el-dropdown-item>Action 1</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { ExtractPropTypes } from 'vue'
import { dropdownProps } from 'element-plus'

type DropdownProps = ExtractPropTypes<typeof dropdownProps>
interface AvatarMenuProps extends /* @vue-ignore */ Partial<DropdownProps> {}

withDefaults(defineProps<AvatarMenuProps>(), {
  trigger() {
    return ['click']
  }
})
</script>

<style scoped></style>
