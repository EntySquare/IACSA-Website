<script lang="ts" setup>
import router from '@/router'
</script>
<template>
  <div class="compaigns">
    <div class="title">Compaigns</div>
    <div class="create_campaign">
      <div>⭐️ Create your first campaign</div>
      <div class="btn_create" @click="router.push('/host/compaigns/new')">
        + Dragt a new campaign
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.compaigns {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  gap: 40px;
  box-sizing: border-box;
  padding: 75px 50px 0;
  .title {
    font-size: 20px;
    font-weight: 600;
    width: 100%;
  }
  .create_campaign {
    border: 1px solid #27254c;
    width: 100%;
    background: rgb(11 12 36 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    padding: 100px 0;
    font-size: 25px;
    gap: 20px;
    .btn_create {
      font-size: 15px;
      color: #000;
      padding: 10px 15px;
      border-radius: 4px;
      background: @themeColor;
    }
  }
}
</style>
