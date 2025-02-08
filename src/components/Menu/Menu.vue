<template>
  <el-menu v-bind="$attrs">
    <SubMenu
      v-for="menu in filterMenus"
      :data="menu"
      v-bind="subMenuProps"
      :key="menu.path"
    ></SubMenu>
  </el-menu>
</template>

<script setup lang="ts">
import type { MenuProps as ElMenuProps, SubMenuProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'

interface MenuProps extends Partial<ElMenuProps> {
  menus: AppRouteMenuItem[]
  subMenuProps: SubMenuProps
}
const props = withDefaults(defineProps<MenuProps>(), {
  menus: () => []
})

const { generateMenuKeys } = useMenu()

const filterMenus = computed(() => {
  return generateMenuKeys(props.menus)
})
</script>

<style scoped></style>
