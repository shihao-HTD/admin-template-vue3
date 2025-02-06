<template>
  <div class="icon-picker">
    <el-button type="primary" @click="() => toggle(true)"> 选择图标 </el-button>

    <el-dialog :title="title" :width="width" v-model="show">
      <!-- v-model="iconTest" -->
      <IconList
        item-class="hover:bg-sky-100 p-1"
        icon-class="text-2xl"
        :show-text="false"
        @click="handleClick"
        active-class="text-[#409eff]"
      >
      </IconList>

      <div class="p-2 flex">
        <div class="mr-4">
          <span class="pr-2">color:</span>
          <el-color-picker v-model="color" />
        </div>
        <div class="flex items-center flex-1">
          <span class="pr-2">fontSize:</span>
          <el-slider v-model="num" :step="1" show-input />
        </div>
      </div>

      <div>
        选中的图标:
        <Icon
          :icon="iconRef"
          :style="{
            color,
            fontSize: num + 'px'
          }"
        ></Icon>
      </div>

      <template #footer>
        <el-button @click="() => toggle(false)">取消</el-button>
        <el-button @click="handleConfirm" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconPickerSubmitDataType } from '@/components/Icon/type'

defineProps({
  width: {
    type: String,
    default: '50%'
  },
  title: {
    type: String,
    default: '选择图标'
  }
})

const emits = defineEmits<{
  submit: [IconPickerSubmitDataType]
  cancel: []
}>()

const color = ref('#409eff')
const num = ref(16)
const [show, toggle] = useToggle(false)

const iconRef = ref('')
const iconTest = ref('ep:zoom-out')

function handleClick(i: string) {
  iconRef.value = 'ep:' + i
}

function handleConfirm() {
  toggle(false)
  emits('submit', {
    icon: iconRef.value,
    color: color.value,
    fontSize: num.value
  })
}
</script>

<style scoped lang="scss">
.icon-picker {
  :deep(.el-dialog__body) {
    padding-bottom: 0;
    padding-top: 0;
    height: auto;
    max-height: 65vh;
    overflow-y: auto;
  }
}
</style>
