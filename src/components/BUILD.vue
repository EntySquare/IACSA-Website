<template>
  <div class="bewater-page">
    <div class="container">
      <div class="left-section">
        <div class="title1">BUILD WITH DIVERSITY AND CREATIVITY</div>
        <div class="title2">
          BeWater is here to catalyze ideas in a highly rewarding way
        </div>

        <div class="icon-section">
          <img src="@/assets/img/4.png" />
        </div>
      </div>

      <div class="right-section">
        <div v-for="item in sections" :key="item.title" class="section">
          <div class="title">{{ item.title }}</div>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
const sections = [
  {
    title: "Campaign Host",
    points: [
      "Cost less with our SOP campaigns hosting service to build your ecosystem effortlessly",
      "Get connected with potential sponsors on BeWater",
      "Develop your ecosystem with talents from different fields",
    ],
  },
  {
    title: "Builder",
    points: [
      "Implement your idea with builders who have different skill sets",
      "Build your reputation by winning valuable campaign prizes",
      "Get connected with potential investors or employers",
    ],
  },
  {
    title: "Sponsor",
    points: [
      "Establish new consumer connections with potential partners",
      "Build innovative applications for marketing and branding together with new talent",
      "Get connected with talented builders",
    ],
  },
  {
    title: "Venture Capital",
    points: [
      "Get connected with talented startup teams from the very beginning",
      "Invest in winning teams with campaigns within their ecosystems",
      "Hiring talent for your portfolios on BeWater is much easier with a solid track record",
    ],
  },
];
</script>

<style lang="less" scoped>
.bewater-page {
  background-color: #04051a;
  width: 100%;
  display: flex;
  align-items: flex-start; /* 调整顶部对齐 */
  justify-content: space-between;
  padding: 120px 80px;
}
.container {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.left-section {
  max-width: 496px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 80px; /* 固定位置到视口顶部 */
  align-self: flex-start;

  .title1 {
    font-family: "Basement Grotesque Bold", serif;
    font-size: 20px;
    line-height: 32px;
    text-align: left;
    color: rgba(145, 150, 176, 0.4);
    margin-bottom: 8px;
  }
  .title2 {
    background-image: linear-gradient(
      0deg,
      rgba(206, 199, 255, 0.8) 0%,
      rgb(255, 255, 255) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Basement Grotesque Bold", serif;
    font-size: 36px;
    line-height: 44px;
    max-width: 470px;
    margin-bottom: 80px;
  }
  .icon-section {
    margin: 0 auto;
    width: 420px;
    height: auto;
  }
}

/* 右侧部分样式 */
.right-section {
  width: 516px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  .section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .title {
      background: linear-gradient(
        0deg,
        rgba(206, 199, 255, 0.8) 0%,
        rgb(255, 255, 255) 100%
      );
      font-family: "Basement Grotesque Bold", serif;
      font-size: 18px;
      line-height: 28px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex-wrap: nowrap;
      list-style: disc;
      margin-left: 20px;
      font-family: "JetBrains Mono", monospace;
      li {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: rgb(145, 150, 176);
      }
    }
  }
}
@media (max-width: 1279px) {
  // bewater-page
  .bewater-page {
    flex-direction: column;
    gap: 40px;
    order: 2;
    padding: 80px !important;
    .container {
      width: 100%;
      flex-direction: column;
      gap: 60px;
      .left-section {
        width: 100%;
        max-width: 100%;
        flex-direction: column;
        position: relative;
        top: 0px; /* 固定位置到视口顶部 */
        align-self: flex-start;
        .icon-section {
          margin: 0 auto;
          width: 420px;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title2 {
          max-width: 496px;
        }
      }
      .right-section {
        width: 100%;
      }
    }
  }
}
@media (max-width: 809px) {
  .bewater-page {
    padding: 60px 16px !important;
    .title1 {
      font-size: 18px;
      line-height: 28px;
    }
    .title2 {
      font-size: 28px;
      line-height: 36px;
    }
    .icon-section {
      width: 100% !important;
    }
  }
}
</style>
