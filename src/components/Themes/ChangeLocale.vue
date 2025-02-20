<template>
  <DropDown
    @change="handleCommand"
    :items="locales"
    :icon-class="iconClass"
    :icon-props="iconPropsComputed"
    v-model="current"
  >
    <template #item="{ item }">
      <span>{{ item.text }}</span>
    </template>
  </DropDown>
</template>

<script setup lang="ts">
import type { LocaleItem } from '@/components/Themes/type'
import type { IconProps } from '@iconify/vue'
import DropDown from '@/components/Menu/DropDown.vue'

const current = ref(0)

interface ChangeLocaleProps extends Partial<IconProps> {
  locales: LocaleItem[]
  iconClass?: string
}
const emits = defineEmits<{
  (e: 'change', command: string | number | object): void
}>()

const props = withDefaults(defineProps<ChangeLocaleProps>(), {
  iconClass: 'text-xl'
})
const iconPropsComputed = computed(() => {
  const { locales, ...restProps } = props
  return restProps
})
function handleCommand(command: LocaleItem, index: number) {
  console.log('=>(ChangeLocale.vue:38) current.value', current.value)
  emits('change', command.name)
}
</script>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item) {
  &.active {
    color: var(--el-dropdown-menuItem-hover-color);
    background-color: var(--el-dropdown-menuItem-hover-fill);
  }
}
</style>
