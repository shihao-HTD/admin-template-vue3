<template>
  <el-menu class="border-r-0!" :style="{ '--bg-color': backgroundColor }" v-bind="elMenuProps">
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
import type { AppRouteMenuItem, IconOptions } from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'

interface MenuProps extends Partial<ElMenuProps> {
  data: AppRouteMenuItem[]
  subMenuProps?: SubMenuProps
  iconProps?: Partial<IconOptions>
}
const props = withDefaults(defineProps<MenuProps>(), {
  data: () => [],
  iconProps(props) {
    return {
      style: {
        fontSize: '22px'
      },
      class: 'mr-3'
    }
  },
  backgroundColor: 'transparent'
})
const slots = useSlots()

const iconProps = reactive(props.iconProps)

watch(
  () => props.collapse,
  () => {
    iconProps.class = props.collapse ? '' : 'mr-3'
  }
)

provide('iconProps', iconProps)

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

<style lang="scss">
.el-sub-menu_title {
  padding-right: 0 !important;
}

.el-menu--horizontal.el-menu {
  border-bottom: 0 !important;
}
</style>
