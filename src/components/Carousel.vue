<template>
  <div class="carousel-container">
    <!-- 左侧按钮 -->
    <button class="carousel-btn left-btn" @click="prevSlide">
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <path
          d="M750.72 60.586667c23.04 23.893333 23.04 62.677333 0 86.613333L398.592 512l352.085333 364.8c23.04 23.936 23.04 62.72 0 86.613333a57.6 57.6 0 0 1-83.584 0l-393.813333-408.106666a62.805333 62.805333 0 0 1 0-86.613334l393.813333-408.106666a57.6 57.6 0 0 1 83.584 0z"
          fill="#ffffff"
        ></path>
      </svg>
    </button>

    <!-- 轮播内容区域 -->
    <div class="carousel-wrapper">
      <div
        class="carousel-track"
        :style="{
          transform: `translateX(-${currentIndex * totalItemWidth}% )`,
          transition: transitionEnabled ? 'transform 0.3s ease-in-out' : 'none',
        }"
      >
        <div
          class="carousel-item"
          v-for="(item, index) in extendedItems"
          :key="index"
          :style="itemWidthStyle"
          style=""
        >
          <div class="item-background">
            <img
              :src="item.image"
              alt="Item Image"
              style="position: relative"
            />
            <div style="position: absolute" class="itemContent">
              <img :src="item.img" alt="" />
              <div>{{ item.title }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧按钮 -->
    <button class="carousel-btn right-btn" @click="nextSlide">
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <path
          d="M341.957209 959.354678c-12.893658 0-25.842575-4.425799-36.386722-13.467733-23.493064-20.10592-26.224268-55.426357-6.064113-78.891791L603.929736 511.789199l-304.423361-355.206978c-20.160155-23.465434-17.427928-58.786894 6.064113-78.891791 23.437805-20.024056 58.786894-17.373693 78.837556 6.064113l335.675132 391.620305c17.974373 20.952194 17.974373 51.875484 0 72.827679l-335.675132 391.620305C373.371686 952.717514 357.691565 959.354678 341.957209 959.354678z"
          fill="#ffffff"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useWindowSize } from "@/utils/useWindowSize";

//动态获取窗口大小
const { windowWidth } = useWindowSize();
const num = computed(() => {
  if (windowWidth.value < 1280) {
    return 2;
  } else if (windowWidth.value < 810) {
    return 1;
  } else {
    return 3;
  }
});

const itemWidthStyle = computed(() => {
  let widthPercentage = 31; // 默认 31%
  if (windowWidth.value < 810) {
    widthPercentage = 90; // 小于 810，100%
  } else if (windowWidth.value < 1280) {
    widthPercentage = 46; // 小于 1280，大于等于 810，50%
  } else {
    widthPercentage = 31; // 大于等于 1280，31%
  }
  return {
    width: `${widthPercentage}%`,
  };
});
// 数据源
const items = ref([
  {
    image:
      "https://framerusercontent.com/images/rmetN9Dzmk0myc1sZEKeIxcj750.jpg?scale-down-to=512",
    img: "https://framerusercontent.com/images/sSnAcbflujGUQDdB4zir0OITRGw.png",
    title: "MEME.ZKWASM() Hackathon",
    text: "OCT 15th, 2024 - NOV 10th, 2024",
  },
  {
    image:
      "https://framerusercontent.com/images/tyqknEYe4MaqUr71qiZ3bYSkOA.jpg?scale-down-to=512",
    img: "https://framerusercontent.com/images/6uOpYtr2tyowqy5c5MF2uReiGMg.jpg?scale-down-to=512",
    title: "Starknet Hackathon 2024",
    text: "Sep 10th, 2024 - Oct 12th, 2024",
  },
  {
    image:
      "https://framerusercontent.com/images/Qo0RuQRyJqq7KuPtGuuwUCoMKI.jpg?scale-down-to=512",
    img: "https://framerusercontent.com/images/Y8MdkQLeC04z21ROw3Lp17h6rU.png?scale-down-to=512",
    title: "ICP x ABCDE x BeWater Accelerator",
    text: "Jul 19th, 2024 - Aug 9th, 2024",
  },
  {
    image:
      "https://framerusercontent.com/images/y5pQKmFKfkYgNwQtPWWz06pjLk.jpg?scale-down-to=512",
    img: "https://framerusercontent.com/images/eGHxcsCVIWggAffT7ITi3sHE6vM.png",
    title: "ETH Shenzhen Hackathon",
    text: "Aug 7th, 2024 - Aug 18th, 2024",
  },
  {
    image:
      "https://framerusercontent.com/images/9qsTdNmM1ix54n3qlP5aA57omU.png?scale-down-to=512",
    img: "https://framerusercontent.com/images/0ds01vZCt24c8xRA5VA1XwBZndk.jpg?scale-down-to=512",
    title: "BeWater AI Crypto Hackathon",
    text: "Apr 24th, 2024 - May 30th, 2024",
  },
]);

// 配置
const visibleItems = num as unknown as number; // 每次显示的项目数
const itemWidth = 100 / visibleItems; // 每个项目宽度（百分比）

// 边距和项目总宽度（包括边距）计算
const marginWidth = 6; // 单边边距，单位 px
const carouselWidth = 100; // 容器宽度的百分比（即占满100%）
const totalItemWidth = computed(() => {
  const marginPercentage = (marginWidth / window.innerWidth) * carouselWidth; // 将16px转换为百分比
  return itemWidth - marginPercentage; // 项目宽度（百分比）+ 边距百分比
});
// 扩展 items 数组，用于实现首尾循环
const extendedItems = computed(() => {
  const prefix = items.value.slice(-visibleItems);
  const suffix = items.value.slice(0, visibleItems);
  return [...prefix, ...items.value, ...suffix];
});

// 当前索引
const currentIndex = ref(visibleItems);

// 过渡状态
const transitionEnabled = ref(true);

// 最大索引
const maxIndex = computed(() => items.value.length + visibleItems - 1);

const prevSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value -= num as unknown as number;

  if (currentIndex.value < visibleItems) {
    // 在动画完成后立即跳转到无缝位置
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = items.value.length + visibleItems - 1;
    }, 300); // 与 CSS 过渡时间保持一致
  }
};

// 切换到下一页
const nextSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value += num as unknown as number;

  if (currentIndex.value > maxIndex.value) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = visibleItems;
    }, 300); // 与 CSS 过渡时间保持一致
  }
};

// 自动轮播间隔时间（毫秒）
const autoPlayInterval = 3000;

// 保存自动轮播的计时器 ID
let autoPlayTimer: ReturnType<typeof setInterval> | null = null;

// 启动自动轮播
const startAutoPlay = () => {
  stopAutoPlay(); // 避免重复启动
  autoPlayTimer = setInterval(() => {
    nextSlide();
  }, autoPlayInterval);
};

// 停止自动轮播
const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 在组件挂载和卸载时管理自动轮播
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>



<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0px 16px 0px 32px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-wrapper {
  flex: 1;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  margin-left: 16px;
  flex: 0 0 auto;

  height: 240px;
  background-color: #0b0c24;
  border-radius: 4px;
  border: 1px solid #4338ca;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.item-background {
  width: 100%;
  height: 100%;
  background: #0b0c24;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.itemContent {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  align-items: center;
  justify-content: center;
}
.item-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 左右按钮样式 */
.carousel-btn {
  background: rgb(0, 0, 0);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  position: absolute;
}

.left-btn {
  left: 20px;
}

.right-btn {
  right: 30px;
}

/* 按钮禁用样式 */
.carousel-btn:disabled {
  background: rgba(0, 0, 0, 0.2);
  cursor: not-allowed;
}
@media (max-width: 809px) {
  .carousel-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 0px 10px 0px 10px;
    margin: 0 auto;
    overflow: hidden;
  }
  .left-btn {
    left: 8%;
  }

  .right-btn {
    right: 11%;
  }
}
</style>

