<template>
  <el-menu
    ref="menuRef"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    class="border-r-0!"
    :style="{ '--bg-color': backgroundColor }"
    v-bind="elMenuProps"
  >
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
import type {
  AppRouteMenuItem,
  EmitSelectType,
  IconOptions,
  OpenCloseType
} from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'

interface MenuProps extends Partial<ElMenuProps> {
  data: AppRouteMenuItem[]
  subMenuProps?: SubMenuProps
  iconProps?: Partial<IconOptions>
}

const props = withDefaults(defineProps<MenuProps>(), {
  data: () => [],
  iconProps() {
    return {
      style: {
        fontSize: '22px'
      },
      class: 'mr-3'
    }
  },
  backgroundColor: 'transparent'
})

const emits = defineEmits<{
  (e: 'select', arg: AppRouteMenuItem): void
  (e: 'open', arg: OpenCloseType): void
  (e: 'close', arg: OpenCloseType): void
}>()

const slots = useSlots()

const iconProps = reactive(props.iconProps)
const menuRef = ref()

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
const { generateMenuKeys, getItem, getParentMenu } = useMenu()

onMounted(() => {
  const item = getParentMenu(filterMenus.value)
  if (item && item.meta && item.meta.key) {
    if (menuRef.value && menuRef.value.open) {
      menuRef.value.open(item.meta.key)
    }
  }
})

const filterMenus = computed(() => {
  return generateMenuKeys(props.data)
})

const handleSelect = (...args: EmitSelectType) => {
  const [index] = args

  const item = getItem(filterMenus.value, index)

  if (item) {
    emits('select', item)
  }
}
const handleOpen = (...args: OpenCloseType) => {
  emits('open', args)
}
const handleClose = (...args: OpenCloseType) => {
  emits('close', args)
}
</script>

<style lang="scss">
.el-menu--vertical .el-sub-menu__title {
  padding-right: 0 !important;
}

.el-menu--horizontal.el-menu {
  border-bottom: 0 !important;
}
</style>
