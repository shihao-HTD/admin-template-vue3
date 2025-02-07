<template>
  <el-dropdown trigger="click">
    <Notification v-bind="filterProps"></Notification>
    <template #dropdown>
      <NoticeMessageList
        :list="list"
        :actions="actions"
        :wrap-class="wrapClass"
        :wrap-style="wrapStyle"
        v-on="forwardEmits"
      ></NoticeMessageList>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { MessageListItem, NoticeProps } from '@/components/Notice/type'
import type { AvatarProps, TabsPaneContext } from 'element-plus'

const emits = defineEmits<{
  clickAvatar: [AvatarProps]
  clickItem: [MessageListItem]
  clickTab: [TabsPaneContext, Event]
}>()

const forwardEmits = {
  clickAvatar: (avatar: AvatarProps) => emits('clickAvatar', avatar),
  clickItem: (item: MessageListItem) => emits('clickItem', item),
  clickTab: (tab: TabsPaneContext, event: Event) => emits('clickTab', tab, event)
}

const props = defineProps<NoticeProps>()
const filterProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { list, actions, ...resetProps } = props
  return resetProps
})
</script>

<style scoped></style>
