<template>
  <Iconify @click="drawer = true" class="text-xl mr-3 cursor-pointer" icon="ri:brush-2-line">
  </Iconify>

  <el-drawer
    class="min-w-[330px] lt-sm:w-full!"
    @close="handleClose"
    v-model="drawer"
    title="主题设置"
  >
    <el-form :model="form">
      <el-form-item label="主题设置">
        <el-color-picker v-model="form.theme"> </el-color-picker>
      </el-form-item>

      <el-form-item label="暗黑模式">
        <el-switch v-model="form.darkMode"> </el-switch>
      </el-form-item>

      <el-form-item label="导航模式">
        <div class="flex justify-around flex-1">
          <el-tooltip content="左侧菜单">
            <div
              :class="['item', { active: form.mode === 'siderbar' }]"
              @click="form.mode = 'siderbar'"
            >
              <div class="bg-dark w-1/4 h-full left-0 top-0 absolute z-30"></div>
              <div class="bg-white w-full h-1/4 left-0 top-0 absolute z-10"></div>
            </div>
          </el-tooltip>
          <el-tooltip content="顶部左侧菜单混合">
            <div :class="['item', { active: form.mode === 'mix' }]" @click="form.mode = 'mix'">
              <div class="bg-white w-1/4 h-full left-0 top-0 absolute z-10"></div>
              <div class="bg-dark w-full h-1/4 left-0 top-0 absolute z-30"></div>
            </div>
          </el-tooltip>
          <el-tooltip content="顶部菜单">
            <div :class="['item', { active: form.mode === 'top' }]" @click="form.mode = 'top'">
              <div class="bg-dark w-full h-1/4 left-0 top-0 absolute z-10"></div>
            </div>
          </el-tooltip>
          <el-tooltip content="左侧菜单混合">
            <div
              :class="['item', { active: form.mode === 'mixbar' }]"
              @click="form.mode = 'mixbar'"
            >
              <div class="bg-dark w-1/5 h-full left-0 top-0 absolute z-30"></div>
              <div class="bg-white w-1/3 h-full left-0 top-0 absolute z-10"></div>
              <div class="bg-white w-full h-1/4 left-0 top-0 absolute z-20 border-b"></div>
            </div>
          </el-tooltip>
        </div>
      </el-form-item>

      <el-form-item label="菜单背景">
        <el-color-picker v-model="form.backgroundColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="菜单宽度">
        <el-slider
          :min="220"
          :max="600"
          class="ml-3"
          show-input
          input-size="small"
          v-model="form.menuWidth"
        >
        </el-slider>
      </el-form-item>

      <el-form-item label="显示Logo">
        <el-switch v-model="form.showLogo"> </el-switch>
      </el-form-item>

      <el-form-item label="切换动画">
        <el-select v-model="form.transition" placeholder="Select">
          <el-option v-for="item in TRANSITION_NAMES" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>

      <el-form-item label="标签页">
        <el-switch v-model="form.showTabs"> </el-switch>
      </el-form-item>

      <el-form-item label="头部固定">
        <el-switch v-model="form.fixedHead"> </el-switch>
      </el-form-item>

      <el-form-item label="显示 面包屑">
        <el-switch v-model="form.showBreadCrumb"> </el-switch>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
import type { ThemeSettingsProps } from '@/components/Themes/type'
import { TRANSITION_NAMES, TransitionNameEnum } from '@/components/Themes/const'

const drawer = ref(false)

const emits = defineEmits<{
  (e: 'change', settings: ThemeSettingsProps): void
}>()

const props = withDefaults(defineProps<ThemeSettingsProps>(), {
  theme: '#409eff',
  menuWidth: 240,
  darkMode: false,
  showLogo: false,
  showTabs: true,
  fixedHead: false,
  showBreadcrumb: true,
  mode: 'siderbar',
  backgroundColor: '#001529',
  transition: TransitionNameEnum.Fade
})

const form = reactive<ThemeSettingsProps>({
  ...props
})

onMounted(() => {
  emits('change', form)
})

function handleClose() {
  emits('change', form)
}
</script>

<style scoped lang="scss">
:deep(.el-form-item__content) {
  justify-content: flex-end;
}
.item {
  @apply bg-gray-100 rounded w-15 h-12 overflow-hidden pos-relative shadow
  border border-gray-200 cursor-pointer;
  &.active {
    @apply border-sky-800 border-2;
  }
}
</style>
