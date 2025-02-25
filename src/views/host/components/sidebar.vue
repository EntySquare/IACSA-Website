<script lang="ts" setup>
import Utils from '@/utils'
import { ref } from 'vue'
import router from '@/router'
import { MetaMaskSDK } from '@metamask/sdk'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { user, main } = useStore()
const {
  userInfo
} = storeToRefs(user)
const show = ref(false)

const openUserMenu = () => {
  show.value = !show.value
  if (show.value) document.addEventListener('click', handleOutsideClick)
  else document.removeEventListener('click', handleOutsideClick)
}
// 点击弹窗外部关闭
function handleOutsideClick(event: { target: any }) {
  const modal = document.getElementById('modal20011156543')
  if (modal) {
    if (!modal.contains(event.target) || event.target === modal) {
      show.value = false
    }
  }
}

const logOutFn = () => {
  Utils.tokenFn.deleteToken()
  show.value = false
  // window.location.reload()
  router.push('/en/campaigns')
}
</script>
<script lang="ts">
export default {
  name: 'Sidebar'
}
</script>
<template>
  <div class="sidebar">
    <div class="left_menu">
      <div class="user_avater" @click.stop="openUserMenu">
        <img
          src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzBXV1ZUT21nNUlnTERoMXhIUURZaERvM0UiLCJyaWQiOiJ1c2VyXzJyRk9vSGtuZWdmdHJvODhZd2UySFRNR3VPSCJ9"
          alt="" srcset="" />
        {{ userInfo.user_name }}
        <el-icon v-if="!show">
          <ArrowUpBold />
        </el-icon>
        <el-icon v-else>
          <ArrowDownBold />
        </el-icon>
      </div>
      <div class="user_menu" v-if="show" id="modal20011156543">
        <div class="user_box">
          <span>Organization</span>
          <div class="user_info active_hover">
            <img
              src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzBXV1ZUT21nNUlnTERoMXhIUURZaERvM0UiLCJyaWQiOiJ1c2VyXzJyRk9vSGtuZWdmdHJvODhZd2UySFRNR3VPSCJ9"
              alt="" srcset="" />
            <div class="name_text_dfdf">
              <span>{{ userInfo.user_name }}</span>
              <span>{{ 'Personal Account' }}</span>
            </div>
          </div>
        </div>
        <div class="other_set">
          <div class="email_title">
            {{ userInfo.emails[0].email_address }}
          </div>
          <div class="item active_hover" @click="router.push('/en/settings'), (show = false)">
            <div class="left_icon">
              <img
                src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUzBXV1ZUT21nNUlnTERoMXhIUURZaERvM0UiLCJyaWQiOiJ1c2VyXzJyRk9vSGtuZWdmdHJvODhZd2UySFRNR3VPSCJ9"
                alt="" srcset="" />
            </div>
            <div class="title">Account Settings</div>
          </div>
          <div @click="logOutFn" class="item active_hover">
            <div class="left_icon">
              <svg t="1736758075264" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1878" width="16" height="16">
                <path
                  d="M152.581094 753.256716 152.581094 271.761474c0-11.281951 9.179057-20.461007 20.461007-20.461007l383.803269 0 0-88.082104L173.042101 163.218362c-59.851133 0-108.543112 48.693002-108.543112 108.543112l0 481.495242c0 59.851133 48.691979 108.543112 108.543112 108.543112l383.803269 0 0-88.081081L173.042101 773.718747C161.760151 773.718747 152.581094 764.53969 152.581094 753.256716z"
                  fill="#ffffff" p-id="1879"></path>
                <path
                  d="M957.121823 505.503029 804.060799 314.127374c-1.249457-1.561565-3.124154-3.302209-11.961426-3.302209-4.284583 1.472538-7.140631 5.53404-7.140631 10.086729l0 142.281517L451.39162 463.193411c-27.02347 0-49.004087 21.958104-49.004087 48.960085s21.980617 49.004087 49.004087 49.004087l333.568145 0 0 142.281517c0 4.552689 2.901073 8.658194 7.185656 10.175757 1.093914 0.357134 2.275833 0.580215 3.547803 0.580215 3.347235 0 6.337335-1.428535 8.390088-4.016477L957.143313 518.846942C960.289979 514.919493 960.289979 509.430478 957.121823 505.503029z"
                  fill="#ffffff" p-id="1880"></path>
              </svg>
            </div>
            <div class="title">Sign out</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab_bar">
      <div @click="router.push('/host')" :class="[
        'tab_bar_item',
        { active: '/host' == router.currentRoute.value.fullPath }
      ]">
        <img src="@/assets/img/summary.svg" alt="" srcset="" />
        <span> Summary </span>
      </div>
      <div @click="router.push('/host/compaigns')" :class="[
        'tab_bar_item',
        {
          active: router.currentRoute.value.fullPath.includes('compaigns')
        }
      ]">
        <img src="@/assets/img/compaigns.svg" alt="" srcset="" />
        <span> Campaigns </span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.sidebar {
  min-width: 278px;
  border-right: 1px solid rgba(255, 255, 255, 0.189);

  .left_menu {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    position: relative;

    .active_hover {
      &:hover {
        background: #444355;
        border-radius: 5px;
      }

      cursor: pointer;
    }

    .user_avater {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      overflow: hidden;
      cursor: pointer;

      img {
        height: 24px;
        width: 24px;
        border-radius: 2px;
      }

      font-size: 12px;
      font-weight: 600;
    }

    .user_menu {
      position: absolute;
      top: 40px;
      left: 10px;
      min-width: 240px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      background: #27263b;
      padding: 5px 0;

      .user_box {
        padding: 0 5px 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
          padding: 5px;
          font-size: 12px;
          color: #9190aa;
        }

        .user_info {
          padding: 5px 5px;
          display: flex;
          align-items: center;
          gap: 8px;

          img {
            height: 24px;
            width: 24px;
            border-radius: 2px;
          }

          .name_text_dfdf {
            display: flex;
            flex-direction: column;
            gap: 2px;

            span {
              padding: 0;
              color: white;
            }
          }
        }
      }

      .other_set {
        border-top: 1px solid rgba(255, 255, 255, 0.352);
        padding: 10px 0 5px;
        display: flex;
        flex-direction: column;
        padding: 5px 5px 0;

        .email_title {
          font-size: 12px;
          font-weight: 600;
          padding: 10px 5px;
          color: #9190aa;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 30px;
          margin: 2px 0;
          padding: 0 5px;

          .left_icon {
            width: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .title {
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }

  .tab_bar {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;

    .tab_bar_item {
      height: 30px;
      // background-color: pink;
      border-radius: 3px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 4px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #383748;
      }
    }

    .active {
      background-color: #383748;
    }
  }
}
</style>
