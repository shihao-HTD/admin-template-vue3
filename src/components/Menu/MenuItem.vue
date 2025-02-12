<template>
  <!-- 单item  -->
  <el-menu-item :disabled="data.meta?.disabled" v-if="!data.meta?.icon" :index="getIndex(data)">{{
    data.meta?.title
  }}</el-menu-item>

  <template v-else>
    <!--  折叠-->
    <el-menu-item :disabled="data.meta?.disabled" v-if="collapse" :index="getIndex(data)">
      <Iconify
        :style="iconStyles.style"
        :class="iconStyles.class"
        :icon="data.meta?.icon"
      ></Iconify>
      <template #title>
        {{ data.meta?.title }}
      </template>
    </el-menu-item>

    <!--  侧栏-->
    <el-menu-item :disabled="data.meta?.disabled" v-else :index="getIndex(data)">
      <Iconify
        :style="iconStyles.style"
        :class="iconStyles.class"
        :icon="data.meta?.icon"
      ></Iconify>
      <span>
        {{ data.meta?.title }}
      </span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import type { AppRouteMenuItem, IconOptions } from '@/components/Menu/type'
import { useMenu } from '@/components/Menu/useMenu'

const props = defineProps<{
  data: AppRouteMenuItem
  collapse?: boolean
}>()

const iconStyles = inject('iconProps') as IconOptions

const { getIndex } = useMenu()
</script>

<style scoped></style>
