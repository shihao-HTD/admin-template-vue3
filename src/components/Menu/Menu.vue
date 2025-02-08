<template>
  <el-menu v-bind="$attrs">
    <SubMenu v-for="menu in menus" :data="menu" v-bind="subMenuProps" :key="menu.path"></SubMenu>
  </el-menu>
</template>

<script setup lang="ts">
import type { MenuProps as ElMenuProps, SubMenuProps } from 'element-plus'
import type { AppRouterMenuItem } from '@/components/Menu/type'

interface MenuProps extends Partial<ElMenuProps> {
  menus: AppRouterMenuItem[]
  subMenuProps: SubMenuProps
}
const props = withDefaults(defineProps<MenuProps>(), {
  menus: () => []
})
</script>

<style scoped></style>
