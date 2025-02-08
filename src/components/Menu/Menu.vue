<template>
  <el-menu v-bind="elMenuProps">
    <slot name="icon"> </slot>
    <!--  左右Logo 加下拉菜单情况-->
    <!--    <div v-if="isDefined(slots['name'])" class="flex-grow"></div>-->
    <SubMenu
      v-for="menu in filterMenus"
      :data="menu"
      :collapse="collapse"
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
  data: AppRouteMenuItem[]
  subMenuProps?: SubMenuProps
}
const props = withDefaults(defineProps<MenuProps>(), {
  data: () => []
})
const slots = useSlots()

const elMenuProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, subMenuProps, ...restProps } = props
  return restProps
})
const { generateMenuKeys } = useMenu()

const filterMenus = computed(() => {
  return generateMenuKeys(props.data)
})
</script>

<style scoped></style>
