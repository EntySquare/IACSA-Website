<template>
  <div class="innovation">
    <!-- 背景视频 -->
    <div class="container">
      <video autoplay muted loop class="background-video">
        <source src="@/assets/img/128_1736319383_raw.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
      <!-- 主要内容区域 -->
      <section class="innovation-platform">
        <div class="platform-content" style="z-index: 2">
          <div class="platform-title" v-if="windowWidth > 810">
            Open Innovation Platform you
          </div>
          <div class="platform-title" v-else>
            Open Innovation <br />
            Platform you need to
          </div>
          <div class="platform_words">
            <div class="highlight" v-if="windowWidth > 810">
              need to grow your
            </div>
            <div v-else class="highlight">grow your</div>

            <div class="dynamic-text" :class="{ hidden: !showText }">
              {{ currentText }}
            </div>
          </div>
        </div>
      </section>
      <div class="platform-bg"></div>
    </div>
    <Carousel style="position: absolute; left: 0; bottom: 20%; z-index: 4" />
    <svgIcon style="position: absolute; left: 50%; bottom: 20%; z-index: 4" />
    <!-- 背景模糊效果 -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import { useWindowSize } from "@/utils/useWindowSize";
const { windowWidth } = useWindowSize();

const words = ["influence", "connection", "experience", "ecosystem"];
const currentIndex = ref(0);
const currentText = ref(words[currentIndex.value]);
const showText = ref(true);
let intervalId: string | number | NodeJS.Timer | undefined;

const startTextRotation = () => {
  intervalId = setInterval(() => {
    showText.value = false; // 隐藏文字
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % words.length;
      currentText.value = words[currentIndex.value];
      showText.value = true; // 显示文字
    }, 1000); // 消失后短暂延迟再更新
  }, 2000);
};

onMounted(() => {
  startTextRotation();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="less">
/* 背景样式 */
.innovation {
  background: #030309;
  color: #fff; /* 白色文字 */
  font-family: Arial, sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 900px;
  width: 100%;
  position: relative;
}

.container {
  text-align: center;
  position: relative;
  width: 100%;
}
/* 主体区域样式 */
.innovation-platform {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 900px;
  margin-top: -22%;

  /* overflow: hidden; */
}
.platform-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.platform-title {
  background: linear-gradient(
    0deg,
    rgba(206, 199, 255, 0.8) 0%,
    rgb(255, 255, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Basement Grotesque Bold", serif;
  font-size: 36px;
  line-height: 44px;

  margin-bottom: 20px;
}
.platform_words {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 高亮部分样式 */
.highlight {
  background: linear-gradient(
    0deg,
    rgba(206, 199, 255, 0.8) 0%,
    rgb(255, 255, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Basement Grotesque Bold", serif;
  font-size: 36px;
  line-height: 44px;
}

.dynamic-text {
  transition: opacity 0.5s ease;
  opacity: 1;
  visibility: visible; /* 默认显示 */

  background: linear-gradient(
    0deg,
    rgba(206, 199, 255, 0.8) 0%,
    rgb(255, 255, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Basement Grotesque Bold", serif;
  font-size: 36px;
  line-height: 44px;

  /* color: rgb(255, 255, 255); */
  white-space: nowrap; /* 防止文字换行 */
}

.dynamic-text.hidden {
  opacity: 0;
  visibility: hidden; /* 隐藏但保留占位 */
}

/* 背景样式 */
.platform-bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    232.153deg,
    rgb(252, 130, 191) 0%,
    rgb(139, 77, 255) 24.0587%,
    rgb(40, 67, 245) 75.0238%,
    rgb(35, 190, 246) 100%
  );
  filter: blur(100px);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  top: -20%;
  left: 50%;
  z-index: 1;

  animation: pulsate 8s infinite; /* 8秒周期，重复播放 */
}

/* 背景视频样式 */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 视频覆盖整个页面宽度 */
  height: 700px; /* 视频覆盖整个页面高度 */
  object-fit: cover; /* 视频内容自适应，不拉伸 */
  z-index: 1; /* 位于模糊背景(.platform-bg)之下 */
  opacity: 0.1; /* 调整透明度 */
  pointer-events: none; /* 禁止鼠标事件，避免干扰其他交互 */
}

/* 调整平台背景的层级 */
.platform-bg {
  z-index: 2; /* 背景模糊效果位于视频之上 */
}

/* 主要内容 */
.innovation-platform {
  z-index: 3; /* 内容层次最高，确保显示在最上方 */
  position: relative; /* 确保内容位置不受视频和背景影响 */
}
@media (max-width: 809px) {
  .innovation {
    height: 912px;
    .innovation-platform {
      height: 912px;
      margin-top: -42%;
    }
    .platform-title {
    }
    .highlight,
    .platform-title {
      font-size: 30px;
      line-height: 40px;
      margin: 0;
    }
    .dynamic-text {
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>
