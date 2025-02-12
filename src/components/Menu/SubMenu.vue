<template>
  <MenuItem :data="data" :collapse="collapse" v-if="!menuHasChildren(data)"></MenuItem>

  <!--  有下拉菜单 -->
  <el-sub-menu v-else :index="getIndex(data)">
    <template v-if="!data.meta?.icon" #title>
      {{ data.meta?.title }}
    </template>

    <!--折叠 侧栏情况-->
    <template v-else #title>
      <Iconify
        :style="iconStyles.style"
        :class="iconStyles.class"
        :icon="data.meta?.icon"
      ></Iconify>

      <span>{{ data.meta.title }}</span>
    </template>

    <SubMenu
      :key="`${data.path}/${child.path}`"
      v-for="child in data.children"
      :data="child"
      v-bind="subAttrs"
    ></SubMenu>
  </el-sub-menu>
</template>

<script setup lang="ts">
import type { SubMenuProps as ElSubMenuProps } from 'element-plus'
import type { AppRouteMenuItem, IconOptions } from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'
import MenuItem from '@/components/Menu/MenuItem.vue'

interface SubMenuProps extends Partial<ElSubMenuProps> {
  data: AppRouteMenuItem
  collapse?: boolean
}

const props = defineProps<SubMenuProps>()

const subAttrs = computed(() => {
  const { data, ...restProps } = props
  return restProps
})
const iconStyles = inject('iconProps') as IconOptions

const { getIndex, menuHasChildren } = useMenu()
</script>

<style scoped></style>
