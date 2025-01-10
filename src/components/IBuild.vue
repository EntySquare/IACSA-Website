<template>
  <div class="hero-section">
    <div class="container">
      <div class="text-content">
        <h1 class="main-title">I build therefore I am.</h1>
        <p class="description">
          BeWater is the ultimate builder community based on the SOP management
          system we built for open innovation campaigns including hackathon,
          design contest, demo day and more. It serves cutting-edge fields and
          also connects traditional industries. BeWater engages builders with
          different skill sets to build a better future together.
        </p>
      </div>

      <div class="visual-content">
        <img
          v-if="windowWidth > 1279"
          src="https://framerusercontent.com/images/ONPOin7nBuPPjD4bV0NMD4Yl5WM.png"
        />
        <img
          v-else
          src="https://framerusercontent.com/images/ElyqG6w09hV2aA2mmFnfDvsA5M.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from "@/utils/useWindowSize";

//动态获取窗口大小
const { windowWidth } = useWindowSize();
</script>

<style scoped lang="less">
.hero-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 80px;

  background-color: #04051a;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    .text-content {
      max-width: 628px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .main-title {
      font-size: 36px;
      font-family: "Basement Grotesque Bold", serif;
      background: linear-gradient(
        0deg,
        rgba(206, 199, 255, 0.8) 0%,
        rgb(255, 255, 255) 100%
      );
      -webkit-background-clip: text; /* 仅裁剪背景到文字范围 */
      -webkit-text-fill-color: transparent; /* 设置文字填充为透明，以显示背景 */
    }

    .description {
      font-size: 18px;
      line-height: 28px;
      font-family: "JetBrains Mono", monospace;
      color: rgb(145, 150, 176);
    }

    .visual-content img {
      max-width: 400px;
      height: auto;
    }
  }
}
@media (max-width: 1279px) {
  .hero-section {
    padding: 80px !important;
    .container {
      flex-direction: column;
      gap: 40px !important;
      .text-content {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }
  }
}
@media (max-width: 809px) {
  .hero-section {
    padding: 60px 16px !important;
    .container {
      gap: 20px !important;
      .visual-content {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 300px;
        }
      }
    }
  }
}
</style>
