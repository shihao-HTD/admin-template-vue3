<template>
  <Notification value="123" color="green" :size="16"> </Notification>
  <!--  <el-badge :value="12" class="item">
    <el-button>comments</el-button>
  </el-badge>-->
  <br />
  <Notice
    wrap-class="w-[300px]"
    :list="lists"
    :actions="actions"
    @clickItem="handleClickItem"
  ></Notice>
</template>

<script setup lang="ts">
import type { NoticeMessageListOptions, NoticeActionItem } from '@/components/Notice/type'

definePage({
  meta: {
    title: '消息通知',
    // icon: 'mdi:user'
  }
})

const actions = ref<NoticeActionItem[]>([
  {
    title: '清空',
    icon: 'ep:delete',
    callback: () => console.log('清空')
  },
  {
    title: '更多',
    icon: 'ep:more',
    callback: () => console.log('更多')
  }
])

const lists = ref<NoticeMessageListOptions[]>([
  {
    title: '通知',
    contents: [
      {
        title: '消息1',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-03 14:55:33',
        tagProps: { type: 'danger' },
        tag: '紧急'
      },
      {
        title: '消息1',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-02 14:55:33'
      },
      {
        title: '消息1',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容1',
        time: '2022-01-01 14:55:33'
      }
    ]
  },
  {
    title: '关注',
    contents: [
      {
        title: '消息3',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容3',
        time: '2022-01-02 14:55:33',
        tagProps: { type: 'info' },
        tag: '通知'
      },
      {
        title: '消息3',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容3',
        time: '2022-01-01 14:55:33'
      }
    ]
  },
  {
    title: '待办',
    contents: [
      {
        title: '消息2',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容2',
        time: '2022-01-02 14:55:33',
        tagProps: { type: 'info' },
        tag: '通知'
      },
      {
        title: '消息2',
        avatar: { src: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' },
        content: '消息内容2',
        time: '2022-01-01 14:55:33'
      }
    ]
  }
])

const handleClickItem = (item: any) => {
  console.log('🚀 ~ file: notice-message.vue:100 ~ handleClickItem ~ item:', item)
}
</script>

<style scoped></style>
