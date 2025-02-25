<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="ml-4">
    <transition-group name="breadcrumb" :css="false" @enter="onEnter">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :data-index="index"
        :to="{ path: item.name }"
        :key="item.name"
      >
        <span>{{ $t(item.meta.title) }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="tsx">
import gsap from 'gsap'

const ArrowRight = <i class="i-ep:arrow-right"></i>
const route = useRoute()

const breadcrumbData = ref<any[]>([])

const change = ref(-1)

watch(breadcrumbData, (newVal, oldVal) => {
  change.value = 0
  for (let i = 0; i < Math.max(newVal.length, oldVal.length); i++) {
    if (newVal.length < i || oldVal.length < i || newVal[i] !== oldVal[i]) {
      change.value++
    }
  }
})

function getBreadcrumbData() {
  breadcrumbData.value = route.matched.filter((item) => item.name && item.meta && item.meta.title)
  console.log('=>(Breadcrumb.vue:23) breadcrumbData', breadcrumbData)
}
function onEnter(el, done) {
  let index = el.dataset.index
  // 子菜单之间进行切换
  if (change.value === 1) {
    index = 1
  }
  gsap.fromTo(
    el,
    {
      opacity: 0,
      x: 20
    },
    {
      opacity: 1,
      x: 0,
      delay: index * 0.15,
      onComplete: done
    }
  )
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

<style scoped lang="scss">
.breadcrumb-move,
.breadcrumb-entry-active,
.breadcrumb-leave-active {
  transition: all 0.5s ease;
}
.breadcrumb-entry-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-leave-active {
  position: absolute;
}
</style>
