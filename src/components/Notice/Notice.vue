<template>
  <el-dropdown trigger="click">
    <Notification></Notification>
    <template #dropdown>
      <NoticeMessageList></NoticeMessageList>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<style scoped></style>
