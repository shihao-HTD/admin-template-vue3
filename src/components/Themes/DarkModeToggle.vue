<template>
  <el-switch
    style="--el-switch-on-color: #333"
    v-model="isDark"
    :active-action-icon="Moon"
    :inactive-action-icon="Sun"
  />
</template>

<script setup lang="tsx">


const isDark = useDark()
const Moon = () => <i class="i-prime:moon"></i>
const Sun = () => <i class="i-octicon:sun-24"></i>


</script>

<style scoped>

</style>
