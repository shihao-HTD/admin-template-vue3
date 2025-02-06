<template>
  <div>
    <el-button type="primary" @click="() => toggle(true)"> 选择图标 </el-button>

    <el-dialog :width="width" v-model="show">
      <IconList
        item-class="hover:bg-sky-100 p-1"
        icon-class="text-2xl"
        :show-text="false"
        @click="handleClick"
        active-class="text-[#409eff]"
      >
      </IconList>

      <div class="py-2">
        <el-color-picker class="mr-2" v-model="color" size="small"></el-color-picker>
        <el-input-number v-model="num" :step="1" size="small"></el-input-number>
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
import type { IconPickerSubmitDataType } from '@/components/type'

defineProps({
  width: {
    type: String,
    default: '50%'
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

<style scoped></style>
