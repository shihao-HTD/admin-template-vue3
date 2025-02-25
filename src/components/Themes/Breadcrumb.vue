<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="ml-4">
    <el-breadcrumb-item
      :to="{ path: item.name }"
      v-for="(item, index) in breadcrumbData"
      :key="item.fullPath || index"
    >
      <span>{{ $t(item.meta.title) }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="tsx">
const ArrowRight = <i class="i-ep:arrow-right"></i>
const route = useRoute()



const breadcrumbData = ref<any[]>([])

function getBreadcrumbData() {
  breadcrumbData.value = route.matched.filter((item) => item.name && item.meta && item.meta.title)
  console.log('=>(Breadcrumb.vue:23) breadcrumbData', breadcrumbData)
}

watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
</script>

<style scoped></style>
