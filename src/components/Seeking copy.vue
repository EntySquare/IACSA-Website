<template>
  <div class="Seeking">
    <div class="container">
      <div class="title">Seeking Collaboration or Developers?</div>
      <div style="position: relative">
        <div class="button-container">LET'S CONNECT -></div>
        <div class="colorBg"></div>
      </div>
    </div>
  </div>
</template>
        
    <script lang="ts" setup>
</script>
        
    <style scoped lang="less">
.Seeking {
  width: 100%;
  background-color: #04051a;
  padding: 120px 80px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-bottom: 64px;
    font-family: "Basement Grotesque Bold",
      "Basement Grotesque Bold Placeholder", sans-serif;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: rgba(145, 150, 176, 0.5);
  }

  .button-container {
    position: relative;
    padding: 10px 30px;
    font-family: "JetBrains Mono", monospace;
    font-size: 14px;
    color: rgb(0, 255, 255); /* 文字颜色 */
    border: 2px solid rgba(0, 255, 255, 0.5); /* 边框 */
    border-radius: 50px; /* 圆角 */

    text-align: center;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: #04051a;
    z-index: 10;
  }

  /* 发光效果 */
  .colorBg {
    position: absolute;
    top: 12%;
    left: 86%;
    // transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: radial-gradient(
      circle,
      rgba(0, 255, 255, 1) 0%,
      rgba(0, 255, 255, 1) 80%
    );
    filter: blur(4px);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
}
@media (max-width: 1279px) {
  .Seeking {
    padding: 60px 0 0;
    padding-bottom: 80px;
  }
}
</style>
        