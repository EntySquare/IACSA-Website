<script lang="ts" setup>
import router from '@/router'

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useWindowSize } from '@/utils/useWindowSize'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import Utils from '../../../utils'
// 导航项列表
const navItems = [
  { path: 'CAMPAIFNS', router: '/en/campaigns' },
  { path: 'PEOJECTS', router: '/en/projects' }
]
const { user } = useStore()
const { is_login } = storeToRefs(user)
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
const show = ref(false)

const openUserMenu = () => {
  show.value = true
  document.addEventListener('click', handleOutsideClick)
}
// 点击弹窗外部关闭
function handleOutsideClick(event: { target: any }) {
  const modal = document.getElementById('modal234351')
  if (modal) {
    if (!modal.contains(event.target) || event.target === modal) {
      show.value = false
    }
  }
}
const logOutFn = () => {
  Utils.tokenFn.deleteToken()
  show.value = false
  window.location.reload()
}
</script>
<script lang="ts">
export default {
  name: 'AppTopNavVue'
}
</script>

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
            <span class="nav-items">
              <router-link
                v-for="(item, index) in navItems"
                :key="index"
                class="nav-item"
                :to="item.router"
              >
                {{ item.path }}
              </router-link>
            </span>
          </div>
        </div>

        <div v-if="!is_login" class="right_menu">
          <svg
            t="1736757224865"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1754"
            width="26"
            height="26"
          >
            <path
              d="M558.1 251.7c40 0 77.7 15.6 106 43.9 28.3 28.3 44 65.9 44 106l0.2 171.4c0 11.1 2.6 22.2 7.6 32.2L793.4 760c0.5 1 2 4-0.3 7.8s-5.7 3.8-6.8 3.8H671l-99.3 0.1-119.5 0.1H388l-149.6 0.1h-0.1c-1.1 0-4.5 0-6.8-3.8s-0.8-6.8-0.3-7.8l77.4-154.6c5-10 7.6-21.2 7.6-32.3L316 402c0-40.1 15.5-77.8 43.8-106.1 28.3-28.4 66-44 106-44l92.1-0.1h0.2m0-60.1h-0.2l-92.1 0.1C349.8 191.9 255.9 286 256 402l0.2 171.4c0 1.9-0.4 3.7-1.3 5.4l-77.4 154.6c-22.6 45.2 10.2 98.4 60.8 98.4h0.1l149.7-0.1c14 55.4 64.2 96.4 123.9 96.4 59.8 0 110-41.1 124-96.6h-21.7H636l150.4-0.1c50.5 0 83.4-53.3 60.8-98.5l-77.5-154.8c-0.8-1.7-1.3-3.5-1.3-5.4l-0.2-171.4C768 285.6 674 191.7 558.1 191.7zM452.2 831.8l119.5-0.1c-11.3 21.5-33.8 36.2-59.8 36.2-25.9 0-48.4-14.7-59.7-36.1H426h26.2z"
              fill="#68738a"
              p-id="1755"
            ></path>
            <path
              d="M512.9 98.4c-55.5 0-100.5 44.9-100.7 100.4 17.1-4.5 35-6.9 53.5-7h6.1c4.3-18.1 20.6-31.6 40.1-31.6 19.4 0 35.7 13.5 40.1 31.6h6c19.2 0 37.8 2.6 55.5 7.4v-0.1c0-55.6-45-100.7-100.6-100.7z"
              fill="#68738a"
              p-id="1756"
            ></path>
          </svg>
          <div class="user_avater" @click.stop="openUserMenu">
            <img
              src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzBXV1ZUT21nNUlnTERoMXhIUURZaERvM0UiLCJyaWQiOiJ1c2VyXzJyRk9vSGtuZWdmdHJvODhZd2UySFRNR3VPSCJ9"
              alt=""
              srcset=""
            />
          </div>

          <div class="user_menu" v-if="show" id="modal234351">
            <div class="user_info active_hover">
              <img
                src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzBXV1ZUT21nNUlnTERoMXhIUURZaERvM0UiLCJyaWQiOiJ1c2VyXzJyRk9vSGtuZWdmdHJvODhZd2UySFRNR3VPSCJ9"
                alt=""
                srcset=""
              />
              {{}} chn-xcz
            </div>
            <div class="other_set">
              <div
                class="item active_hover"
                @click="router.push('/en/settings'), (show = false)"
              >
                <div class="left_icon">
                  <el-icon><Setting /></el-icon>
                </div>
                <div class="title">Manage account</div>
              </div>
              <div
                class="item active_hover"
                @click="router.push('/host'), (show = false)"
              >
                <div class="left_icon">
                  <svg
                    t="1736758153110"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1908"
                    width="22"
                    height="22"
                  >
                    <path
                      d="M724.48 128H315.936C265.152 128 224 167.328 224 215.776v592.448C224 856.64 265.152 896 315.936 896H724.48c50.784 0 91.936-39.328 91.936-87.776V215.776C816.416 167.36 775.264 128 724.48 128zM315.936 186.56H724.48c16.928 0 30.72 13.056 30.72 29.216v592.448c0 16.16-13.792 29.216-30.72 29.216H315.936a29.984 29.984 0 0 1-30.72-29.216V215.776c0-16.16 13.792-29.248 30.72-29.248z m308.288 51.456c16.896 0 30.624 13.12 30.624 29.312 0 14.656-11.296 26.816-26.112 28.928l-4.512 0.32h-217.28a29.984 29.984 0 0 1-30.72-29.248c0-14.72 11.392-26.944 26.144-28.96l4.576-0.32h217.28z m30.624 137.024c0-16.16-13.728-29.28-30.624-29.28h-217.28l-4.576 0.32a29.76 29.76 0 0 0-26.048 28.96c0 16.16 13.664 29.248 30.624 29.248h217.216l4.512-0.32a29.76 29.76 0 0 0 26.144-28.928h0.032zM439.424 512a53.856 53.856 0 0 0-53.856 53.856v53.856a53.856 53.856 0 0 0 53.856 53.856h161.6a53.856 53.856 0 0 0 53.824-53.856v-53.856A53.856 53.856 0 0 0 600.992 512h-161.568z m26.944 107.712a26.912 26.912 0 0 1 0-53.856h107.712a26.912 26.912 0 0 1 0 53.856h-107.712z m53.856 161.6a26.944 26.944 0 1 0 0-53.888 26.944 26.944 0 0 0 0 53.856z"
                      fill="#ffffff"
                      p-id="1909"
                    ></path>
                  </svg>
                </div>
                <div class="title">Host</div>
              </div>
              <div @click="logOutFn" class="item active_hover">
                <div class="left_icon">
                  <svg
                    t="1736758075264"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1878"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M152.581094 753.256716 152.581094 271.761474c0-11.281951 9.179057-20.461007 20.461007-20.461007l383.803269 0 0-88.082104L173.042101 163.218362c-59.851133 0-108.543112 48.693002-108.543112 108.543112l0 481.495242c0 59.851133 48.691979 108.543112 108.543112 108.543112l383.803269 0 0-88.081081L173.042101 773.718747C161.760151 773.718747 152.581094 764.53969 152.581094 753.256716z"
                      fill="#ffffff"
                      p-id="1879"
                    ></path>
                    <path
                      d="M957.121823 505.503029 804.060799 314.127374c-1.249457-1.561565-3.124154-3.302209-11.961426-3.302209-4.284583 1.472538-7.140631 5.53404-7.140631 10.086729l0 142.281517L451.39162 463.193411c-27.02347 0-49.004087 21.958104-49.004087 48.960085s21.980617 49.004087 49.004087 49.004087l333.568145 0 0 142.281517c0 4.552689 2.901073 8.658194 7.185656 10.175757 1.093914 0.357134 2.275833 0.580215 3.547803 0.580215 3.347235 0 6.337335-1.428535 8.390088-4.016477L957.143313 518.846942C960.289979 514.919493 960.289979 509.430478 957.121823 505.503029z"
                      fill="#ffffff"
                      p-id="1880"
                    ></path>
                  </svg>
                </div>
                <div class="title">Sign out</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="sign_in_btn" @click="router.push('/sign-in')">
          SIGN IN
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.right_menu {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  position: relative;
  .active_hover {
    &:hover {
      background: #444355;
      border-radius: 5px;
    }
    cursor: pointer;
  }

  .user_avater {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }
  .user_menu {
    position: absolute;
    top: 50px;
    right: 0px;
    min-width: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #27263b;
    padding: 0 10px;
    .user_info {
      margin: 10px 0;
      padding: 0 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      height: 30px;
      img {
        height: 20px;
        width: 20px;
      }
    }
    .other_set {
      border-top: 1px solid rgba(255, 255, 255, 0.352);
      padding: 10px 0 5px;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        height: 30px;
        margin: 5px 0;
        .left_icon {
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
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
  .enter-button {
    svg {
      height: 24px;
    }
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

.sign_in_btn {
  height: 38px;
  border: 1px solid @themeColor;
  padding: 0 30px;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  color: @themeColor;
  font-family: '__JetBrains_Mono_3c557b', '__JetBrains_Mono_Fallback_3c557b',
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji' !important;
  &:hover {
    background: @themeColor;
    color: #04051a;
  }
}
</style>
