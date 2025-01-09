<script lang="ts" setup>
import connectWallet from '@/web3/connectWallet'
import { MetaMaskSDK } from '@metamask/sdk'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import router from '@/router'
const { user, main } = useStore()
const { user_name, email_address, email_code_timer } = storeToRefs(user)
const { loading } = storeToRefs(main)
const data = reactive({
  userName: '',
  emailAddress: ''
})
const continueFn = () => {
  user_name.value = data.userName
  email_address.value = data.emailAddress
  email_code_timer.value = (Date.now() + 30 * 1000).toString()
  loading.value = true
  let timer = setInterval(() => {
    if (email_address.value != '' && user_name.value != '') {
      router.push('/sign-up/continue/verify-email-address')
      loading.value = false
      clearInterval(timer)
    } else {
      clearInterval(timer)
      loading.value = false
    }
  }, 100)
}
</script>
<template>
  <div class="sign_up">
    <div class="content_body">
      <div class="title">Fill in missing fields</div>
      <div class="text_1">Please fill in the remaing details to continue</div>
      <div v-if="0" class="tips">
        <el-icon
          ><WarnTriangleFilled style="width: 16px; height: 16px; color: red"
        /></el-icon>
      </div>
      <div class="email_username">
        <div class="two">
          <div class="user_name">
            <div class="user_name_title">
              <div class="in_title">Username</div>
            </div>
            <input type="text" placeholder="" v-model="data.userName" />
          </div>
          <div class="email">
            <div class="email_title">
              <div class="in_title">Email address</div>
            </div>
            <input
              type="text"
              placeholder="Enter your email address"
              v-model="data.emailAddress"
            />
          </div>
        </div>
      </div>
      <div class="continue_box">
        <div class="continue_btn button" @click="continueFn">
          Continue<CaretRight style="width: 14px" />
        </div>
        <div class="have_a">Already have an account? <span>Sign in</span></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.sign_up {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .content_body {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .in_title {
      border-bottom: 1px solid rgba(255, 255, 255, 0.485);
    }
    .title {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      margin: 0px;
      font-family: inherit;
      letter-spacing: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .text_1 {
      box-sizing: border-box;
      margin: 0px;
      font-size: 13px;
      font-family: inherit;
      letter-spacing: normal;
      font-weight: 400;
      line-height: 1.38462;
      color: rgba(255, 255, 255, 0.65);
      overflow-wrap: break-word;
      margin-bottom: 2.5rem;
    }
    .tips {
      height: 12px;
    }
    .select_wallate {
      height: 30px;
      display: flex;
      gap: 10px;
      width: 100%;
      box-sizing: border-box;
      margin: 0px;
      font-size: 13px;
      font-family: inherit;
      letter-spacing: normal;
      font-weight: 500;
      line-height: 1.38462;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: black;
      .metamask,
      .okx {
        flex: 1;
        background-color: white;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        img {
          height: 16px;
          width: 16px;
        }
      }
    }
    .or_text {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      margin: 0px;
      font-family: inherit;
      letter-spacing: normal;
      font-weight: 700;
      //   font-size: 1.25rem;
      line-height: 1.75rem;
      padding: 25px;
    }
    .email_username {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .one {
        display: flex;
        gap: 10px;
        .first_name,
        .last_name {
          flex: 1;
          box-sizing: border-box;
          margin: 0px;
          font-size: 14px;
          font-family: inherit;
          letter-spacing: normal;
          font-weight: 400;
          line-height: 1.38462;
          overflow-wrap: break-word;
          .first_name_title,
          .last_name_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: rgba(255, 255, 255, 0.485);
            span {
              color: rgba(255, 255, 255, 0.428);
              font-size: 12px;
            }
          }
        }
      }
      .two {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .user_name_title,
        .email_title {
          display: flex;
          box-sizing: border-box;
          margin: 0px;
          font-size: 14px;
          font-family: inherit;
          letter-spacing: normal;
          font-weight: 400;
          line-height: 1.38462;
          color: rgba(255, 255, 255, 0.485);
          overflow-wrap: break-word;
        }
      }
      input {
        margin: 10px 0;
        width: 100%;
        height: 30px;
        color: white;
        caret-color: white;
        border-radius: 4px;
        background-color: transparent;

        &::placeholder {
          color: rgba(255, 255, 255, 0.21);
          box-sizing: border-box;
          margin: 0px;
          font-size: 13px;
          font-family: inherit;
          letter-spacing: normal;
          font-weight: 200;
          line-height: 1.38462;
          overflow-wrap: break-word;
        }
        border: 1px solid rgba(255, 255, 255, 0.202);
        padding: 8px;
      }
    }
    .continue_box {
      margin-top: 10px;
      width: 100%;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #181818;
      .continue_btn {
        background-color: @themeColor;
        padding: 10px;
        color: #000;
        box-sizing: border-box;
        margin: 0px;
        font-family: inherit;
        letter-spacing: normal;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .have_a {
        padding: 20px 0;
        text-align: center;
        span {
          color: @themeColor;
        }
      }
    }
  }
}
</style>
