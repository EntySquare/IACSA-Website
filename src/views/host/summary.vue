<script lang="ts" setup>
import router from '@/router'
import Utils from '@/utils'
import { ref } from 'vue'
import { MetaMaskSDK } from '@metamask/sdk'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { user, main } = useStore()
const {
  userInfo
} = storeToRefs(user)
const four_data = [
  {
    name: 'Total Visitors',
    value: 0,
    time: 0
  },
  {
    name: 'Total Builders',
    value: 0,
    time: 0
  },
  {
    name: 'Total Projects',
    value: 0,
    time: 0
  },
  {
    name: 'Total Awards',
    value: 0,
    time: 0
  }
]
</script>
<template>
  <div class="summary">
    <div class="hello_user">Hello,{{ userInfo.user_name }}</div>
    <div class="create_campaign">
      <div>⭐️ Create your first campaign</div>
      <div class="btn_create" @click="router.push('/host/compaigns/new')">
        + Dragt a new campaign
      </div>
    </div>
    <div class="metrics">
      <div class="title">Metrics</div>
      <div class="four_tongji">
        <div class="four_tongji_item" v-for="(item, index) in four_data" :key="index">
          <div class="four_tongji_item_title">
            {{ item.name }}
          </div>
          <div class="four_tongji_item_value">{{ item.value }}</div>
          <div class="four_tongji_item_time">
            -> <span>{{ item.time }}</span> this month
          </div>
        </div>
      </div>
    </div>
    <div class="activity">
      <div class="title">Activity</div>
      <span> NO activity recorded yes. </span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.summary {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  gap: 40px;
  padding: 100px 50px 0;

  .hello_user {
    font-size: 24px;
    color: #68738a;
    font-weight: 600;
    width: 100%;
  }

  .create_campaign {
    border: 1px solid #27254c;
    width: 100%;
    background: rgb(11 12 36 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 40px 0;
    font-size: 25px;
    gap: 20px;

    .btn_create {
      font-size: 15px;
      color: #000;
      padding: 10px 15px;
      border-radius: 4px;
      background: @themeColor;
    }
  }

  .metrics {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    .four_tongji {
      display: flex;
      gap: 20px;

      .four_tongji_item {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        gap: 10px;
        padding: 20px;
        flex: 1;
        border: 1px solid #27254c;
        background: rgb(11 12 36 1);

        .four_tongji_item_title {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.605);
        }

        .four_tongji_item_value {
          font-size: 26px;
        }

        .four_tongji_item_time {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.605);

          span {
            color: rgb(87, 191, 223);
          }
        }
      }
    }
  }

  .activity {
    width: 100%;

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    span {
      display: block;
      width: 100%;
      padding: 20px;
      text-align: center;
      color: rgb(100 116 139 1);
    }
  }
}
</style>
