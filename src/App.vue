<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>
<template>
  <!-- <Suspense> 是一个用于实现组件延迟加载和异步渲染的组件 -->
  <!-- 一级路由出口 -->
  <router-view></router-view>
  <Toaster
    :expand="true"
    position="top-center"
    :toastOptions="{
      style: { background: '#111', border: 'none', color: 'white' },
      class: 'my-toast'
    }"
  />
</template>
<style scoped lang="less"></style>
