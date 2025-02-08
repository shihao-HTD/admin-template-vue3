<template>
  <!--  单Item start-->
  <!-- 单item  -->
  <el-menu-item index="1">Processing Center</el-menu-item>

  <!--  折叠-->
  <el-menu-item index="2">
    <el-icon><icon-menu /></el-icon>
    <template #title>Navigator Two</template>
  </el-menu-item>

  <!--  侧栏-->
  <el-menu-item index="4">
    <el-icon><setting /></el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
  <!-- 单Item end  -->

  <!--  左右Logo 加下拉菜单情况-->
  <div class="flex-grow"></div>

  <!--  有下拉菜单 -->
  <el-sub-menu index="2">
    <template #title>Workspace</template>
    <!--折叠 侧栏情况-->
    <!--    <template #title>
      <el-icon><location /></el-icon>
      <span>Navigator One</span>
    </template>-->

    <SubMenu :data="data" v-bind="subAttrs"></SubMenu>
  </el-sub-menu>
</template>

<script setup lang="ts">
import type { SubMenuProps as ElSubMenuProps } from 'element-plus'
import type { AppRouterMenuItem } from '@/components/Menu/type'

interface SubMenuProps extends Partial<ElSubMenuProps> {
  data: AppRouterMenuItem
}

const props = defineProps<SubMenuProps>()

const subAttrs = computed(() => {
  const { data, ...restProps } = props
  return restProps
})
</script>

<style scoped></style>
