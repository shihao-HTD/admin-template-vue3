<template>
  <el-tabs v-model="activeName" :class="wrapClass" :style="wrapStyle">
    <el-tab-pane
      v-for="(tabItem, index) in list"
      :key="index"
      :label="tabItem.title"
      :name="tabItem.title"
    >
      <ul v-if="tabItem.contents && tabItem.contents.length">
        <li v-for="(item, itemIndex) in tabItem.contents" :key="itemIndex">
          <el-row justify="center" align="middle">
            <el-col
              v-if="item.avatar"
              @click="handleClickAvatar(item.avatar)"
              :span="4"
              align="middle"
            >
              <el-avatar
                v-bind="
                  Object.assign(
                    {
                      size: 'small'
                    },
                    item.avatar
                  )
                "
              />
            </el-col>

            <el-col @click="handleClickItem(item)" :span="20" class="px-2">
              <!--              消息-->
              <el-row align="middle" class="flex-nowrap! mb-2">
                <div class="text-base line-clamp-1">{{ item.title }}</div>
                <el-tag v-if="item.tag" class="ml-2" effect="dark" v-bind="item.tagProps">{{
                  item.tag
                }}</el-tag>
              </el-row>

              <el-row>
                <div class="text-sm text-gray-400 mb-2 line-clamp-2">{{ item.content }}</div>
              </el-row>

              <el-row>
                <div class="text-sm text-gray-400">{{ item.time }}</div>
              </el-row>
            </el-col>
          </el-row>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>

  <div class="w-full flex justify-around border-t">
    <div
      @click="action.callback"
      v-for="(action, index) in actions"
      :key="index"
      class="flex-1 py-3 border-r flex items-center justify-center hover:bg-sky-100 cursor-pointer text-gray-500"
    >
      <Iconify v-if="action.icon" v-bind="omit(action, ['title', 'callback'])"></Iconify>
      <span class="ml-2">{{ action.title }}</span>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { AvatarProps } from 'element-plus'
import type { MessageListItem, NoticeMessageListProps } from '@/components/Notice/type'
import omit from 'lodash-es/omit'
const props = defineProps<NoticeMessageListProps>()

const activeName = ref(props.list[0]?.title || '')

const emits = defineEmits<{
  clickAvatar: [AvatarProps]
  clickItem: [MessageListItem]
}>()

function handleClickAvatar(avatar: AvatarProps) {
  emits('clickAvatar', avatar)
}
function handleClickItem(item: MessageListItem) {
  emits('clickItem', item)
}
</script>

<style scoped></style>
