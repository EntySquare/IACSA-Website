<script lang="ts" setup>
import useStore from '@/store'
import router from '@/router'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const { user } = useStore()
onMounted(() => {
  user.getUserInfo()
})

</script>
<template>
  <div class="campaigns">
    <h1>campaigns</h1>
  </div>
</template>
<style lang="less" scoped>
.campaigns {
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
