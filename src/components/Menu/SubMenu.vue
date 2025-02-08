<template>
  <MenuItem></MenuItem>
  <!--  左右Logo 加下拉菜单情况-->
  <div class="flex-grow"></div>

  <!--  有下拉菜单 -->
  <el-sub-menu index="2">
    <template #title>Workspace</template>
    <!--折叠 侧栏情况-->
    <!--    <template #title>
      <el-icon><location /></el-icon>
      <span>Navigator One</span>
    </template>-->

    <SubMenu :data="data" v-bind="subAttrs"></SubMenu>
  </el-sub-menu>
</template>

<script setup lang="ts">
import type { SubMenuProps as ElSubMenuProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'
import MenuItem from '@/components/Menu/MenuItem.vue'

interface SubMenuProps extends Partial<ElSubMenuProps> {
  data: AppRouteMenuItem
}

const props = defineProps<SubMenuProps>()

const subAttrs = computed(() => {
  const { data, ...restProps } = props
  return restProps
})

const { getIndex } = useMenu()
</script>

<style scoped></style>
