<template>
  <el-dropdown trigger="click">
    <Notification v-bind="filterProps"></Notification>
    <template #dropdown>
      <NoticeMessageList
        :list="list"
        :actions="actions"
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
      ></NoticeMessageList>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { NoticeProps } from '@/components/Notice/type'

const props = defineProps<NoticeProps>()
const filterProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { list, actions, ...resetProps } = props
  return resetProps
})
</script>

<style scoped></style>
