<script lang="ts" setup>
import Sidebar from './components/sidebar.vue'
</script>
<template>
  <div class="host">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.host {
  display: flex;
  height: 100vh;
}
</style>
