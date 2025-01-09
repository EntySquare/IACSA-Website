<script lang="ts" setup></script>
<template>
  <div class="loading_box">
    <div class="loading">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading_box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.287);
}

.loading {
  position: relative;
  width: 100px; /* 父容器宽度 */
  height: 100px; /* 父容器高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 20px; /* 初始圆的宽度 */
  height: 20px; /* 初始圆的高度 */
  border: 2px solid  @themeColor; /* 圆的颜色 */
  border-radius: 50%;
  opacity: 1;
  animation: expandAndFade 1.5s ease-out infinite;
}

.circle:nth-child(2) {
  animation-delay: 0.5s;
}

.circle:nth-child(3) {
  animation-delay: 1s;
}

@keyframes expandAndFade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(5); /* 放大的倍数 */
    opacity: 0;
  }
}
</style>
