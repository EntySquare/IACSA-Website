<script lang="ts" setup>
import router from '@/router'
const routerData = [
  { name: 'Basic Information', path: '/en/settings/basic' },
  { name: 'Builder Profile', path: '/en/settings/extra' }
]
</script>
<template>
  <div class="setting">
    <div class="container">
      <div class="title">Account Setting</div>
      <div class="setting_body">
        <div class="tab_bar">
          <div
            :class="[
              'tab_bar_item',
              { active_tab: item.path == router.currentRoute.value.fullPath }
            ]"
            v-for="(item, index) in routerData"
            :key="index"
            @click="router.push(item.path)"
          >
            {{ item.name }}
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.setting {
  min-height: 100vh;
  height: 100%;
  padding-top: 200px;
  box-sizing: border-box;
  .container {
    height: 100%;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 500;
      line-height: 1.5;
      color: rgb(255 255 255 / var(--tw-text-opacity));
      font-size: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.282);
      padding-bottom: 15px;
    }
    .setting_body {
      flex: 1;
      display: flex;
      // height: 100%;
      .tab_bar {
        height: 100%;
        width: 200px;
        display: flex;
        flex-direction: column;
        padding: 20px 20px 20px 0px;
        gap: 10px;
        .tab_bar_item {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          color: #8c96ab;
        }
        .active_tab {
          background: #111629;
        }
        border-right: 1px solid rgba(255, 255, 255, 0.282);
      }
    }
  }
}
</style>
