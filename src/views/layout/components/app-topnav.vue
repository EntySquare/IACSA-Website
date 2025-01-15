<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container1">
        <div class="navbarMobile" v-if="windowWidth < 810">
          <div id="app">
            <!-- 菜单按钮 -->
            <div class="menu-icon" @click="handleClick">
              <span :class="{ open: isDrawerOpen }"></span>
              <span :class="{ open: isDrawerOpen }"></span>
            </div>

            <!-- 抽屉 -->
            <div class="drawer" :class="{ open: isDrawerOpen }">
              <div class="drawer-content1">
                <ul v-for="(item, index) in drawerItems1" :key="item">
                  <li
                    v-if="index === 0"
                    :style="getItemStyle(index)"
                    class="drawer-item1"
                  >
                    {{ item }}
                  </li>
                  <li v-if="index === 1">
                    {{ item }}
                  </li>
                  <li
                    v-if="index === 2"
                    :style="getItemStyle(index)"
                    class="drawer-item1"
                  >
                    {{ item }}
                  </li>
                  <li v-if="index === 3">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="line"></div>
              <div class="drawer-content">
                <ul v-for="(item, index) in drawerItems" :key="item">
                  <li
                    :style="getItemStyle(index)"
                    class="drawer-item"
                    v-if="index === 0"
                  >
                    {{ item }}
                  </li>
                  <li
                    :style="getItemStyle(index)"
                    class="drawer-item"
                    v-if="index === 1"
                  >
                    {{ item }}
                  </li>
                  <li
                    :style="getItemStyle(index)"
                    class="drawer-item"
                    v-if="index === 2"
                  >
                    {{ item }}
                  </li>
                  <li v-if="index === 3">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="windowWidth < 810" class="logoMobile" style="z-index: 1000">
          <img
            src="https://framerusercontent.com/images/tPARp861sam7uMlfJzybvdYO5c.svg"
            alt=""
          />
        </div>
        <div class="left-side" v-else>
          <router-link to="/">
            <div class="logo">
              <img
                src="https://framerusercontent.com/images/KzmEYJoH5H584cEIyvf1sjE69A.svg"
                alt="BeWater"
              />
            </div>
          </router-link>

          <div>
            <router-link to="/" class="nav-items">
              <span v-for="item in navItems" :key="item" class="nav-item">
                {{ item }}
              </span>
            </router-link>
          </div>
        </div>

        <div
          class="enter-button"
          style="z-index: 1000"
          @click="router.push('/en/campaigns')"
        >
          <button>ENTER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useWindowSize } from '@/utils/useWindowSize'
// 导航项列表
const navItems = ref(['HACKATHON', 'VENTURE STUDIO', 'BUILDERBOARD', 'HOST'])

//动态获取窗口大小
const { windowWidth } = useWindowSize()

// 控制抽屉状态
const isDrawerOpen = ref(false) // 抽屉是否打开
const menuState = ref(0) // 菜单状态：0=，1—，2X，3>

// 切换按钮状态
const handleClick = () => {
  if (menuState.value === 0) {
    // 第一步：= -> — -> X
    menuState.value = 1 // 立即从 = 变成 —
    setTimeout(() => {
      menuState.value = 2 // 1 秒后变成 X
      isDrawerOpen.value = true // 打开抽屉
      document.body.style.overflow = 'hidden' // 禁止背景滚动
    }, 300)
  } else if (menuState.value === 2) {
    // 第二步：X -> > -> =
    menuState.value = 3 // 立即从 X 变成 >
    setTimeout(() => {
      menuState.value = 0 // 1 秒后变成 =
      isDrawerOpen.value = false // 关闭抽屉
      document.body.style.overflow = '' // 恢复背景滚动
    }, 300)
  }
}

// 动态控制 CSS 类
const line1Class = computed(() =>
  menuState.value === 0
    ? 'line1'
    : menuState.value === 1
    ? 'line1 to-line'
    : menuState.value === 2
    ? 'line1 to-x'
    : 'line1 to-arrow'
)

const line2Class = computed(() =>
  menuState.value === 0
    ? 'line2'
    : menuState.value === 1
    ? 'line2 to-line'
    : menuState.value === 2
    ? 'line2 to-x'
    : 'line2 to-arrow'
)

// 抽屉中的内容
const drawerItems = ['Twitter', 'Discord', 'Telegram', 'Medium']
const drawerItems1 = ['Hackathon', 'Venture Studio', 'Builderboard', 'Host']

// 动态计算动画延迟
const getItemStyle = (index: number) => {
  return {
    transitionDelay: `${index * 0.1}s`
  }
}
</script>
<script lang="ts">
export default {
  name: 'AppTopNavVue'
}
</script>
<style scoped lang="less">
.navbar {
  position: fixed;
  z-index: 1000;
  height: 80px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}
.container1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-side {
    display: flex;
    align-items: center;
    gap: 64px;
  }
  .logo img {
    width: 160px;
    height: 40px;
  }

  .nav-items {
    display: flex;
    gap: 32px;
  }

  .nav-item {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;

    color: #fff;
  }

  .nav-item:hover {
    color: #00ffff; /* 浅灰色 */
  }

  .enter-button button {
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    background: transparent;
    color: white;
    font-size: 12px;
    cursor: pointer;
    --framer-font-family: 'JetBrains Mono', monospace;
    --framer-font-size: 12px;
  }
}
@media (max-width: 1279px) {
  .navbar {
    .navbar-inner {
      .container1 {
        .left-side {
          gap: 20px;
        }
        .nav-items {
          gap: 24px;
        }
      }
    }
  }
}
@media (max-width: 809px) {
  .navbar {
    padding: 16px;
    height: 72px;
    .navbar-inner {
      .container1 {
        .left-side {
          gap: 20px;
        }
        .nav-items {
          gap: 24px;
        }
      }
    }
  }
}

.app {
  height: 80px;
  width: 100%;
  padding: 20px;
}
/* 菜单按钮基础样式 */
.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  position: relative;
  z-index: 1000;
}

.menu-icon span {
  width: 20px;
  height: 2px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.5s ease;
}

.menu-icon span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.menu-icon span.open:nth-child(2) {
  transform: translateY(-6px) rotate(-45deg);
}

/* 抽屉样式 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 5, 27, 0.97);
  opacity: 1;
  padding: 142px 32px;
  right: -100%;
  height: 100%;
  transition: right 0.3s ease-in-out;

  transition: transform 0.3s ease;
}
.drawer-content1 {
  li {
    color: #ffffff;
    &:hover {
      color: #00ffff;
    }
  }
  font-family: 'Basement Grotesque Bold', 'Basement Grotesque Bold Placeholder',
    sans-serif;
  font-size: 32px;

  text-align: left;
  text-transform: uppercase;
}
.drawer-content {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  li {
    color: #9b96b0;
    &:hover {
      color: #ffffff;
    }
  }
}
.line {
  background-color: rgba(255, 255, 255, 0.2);
  transform: none;
  transform-origin: 50% 50% 0px;
  height: 1px;
  width: 100%;
  margin: 64px 0;
}
/* 禁止滚动的样式 */
.no-scroll {
  overflow: hidden;
}
.logoMobile {
  width: 44px;
  height: 32px;
}

.drawer.open {
  right: 0;
}

.drawer-item {
  margin: 10px 0;
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}
.drawer-item1 {
  margin: 10px 0;
  opacity: 0;
  transform: translateX(40px);

  transition: all 0.3s ease-in-out;
}

.drawer.open .drawer-item {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
.drawer.open .drawer-item1 {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
.line {
  opacity: 0;
  transform: translateX(40px) translateY(-40px);

  transition: all 0.3s ease-in-out;
}
.drawer.open .line {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
