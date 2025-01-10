<script setup lang='ts' name="HomeView"></script>
<template>
  <div class="home_view">
    <!-- <div class="container"> -->
    <Open />

    <IBuild />
    <WHAT />
    <BUILD />
    <INVESTORS />
    <Seeking />
    <!-- </div> -->
  </div>
</template>
<style scoped lang='less'>
.home_view {
  // background: black;
  // min-height: calc(100vh - 80px - 100px);
  background: #030309;
  .container {
    // padding: 60px 0 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>