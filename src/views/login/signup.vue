<script lang="ts" setup>
import connectWallet from '@/web3/connectWallet'
import { MetaMaskSDK } from '@metamask/sdk'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import router from '@/router'
const { user, main } = useStore()
const {
  wallet_address,
  message,
  signature,
  user_name,
  email_address,
  email_code,
  email_code_timer
} = storeToRefs(user)
const { loading } = storeToRefs(main)
wallet_address.value = ''
message.value = ''
signature.value = ''
user_name.value = ''
email_address.value = ''
email_code_timer.value = ''
email_code.value = ''
const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: 'IACSA',
    url: window.location.href
  },
  infuraAPIKey: import.meta.env.INFURA_API_KEY
})
const metamaskFn = async () => {
  const msg =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  const signatureV = await MMSDK.connectAndSign({ msg })
  const accounts = await MMSDK.connect()
  if (signatureV!.toString()) {
    wallet_address.value = accounts[0]
    message.value = msg
    signature.value = signatureV!.toString()
    loading.value = true
    let timer = setInterval(() => {
      if (wallet_address.value != '') {
        router.push('/sign-up/continue')
        loading.value = false
        clearInterval(timer)
      }
    }, 100)
  }
}
</script>
<template>
  <div class="sign_up">
    <div class="content_body">
      <div class="title">Create your account</div>
      <div class="text_1">
        Welcome! Please fill in the details to get started
      </div>
      <div v-if="0" class="tips">
        <el-icon
          ><WarnTriangleFilled style="width: 16px; height: 16px; color: red"
        /></el-icon>
      </div>
      <div class="select_wallate">
        <div class="metamask button" @click="metamaskFn">
          <img
            crossorigin="anonymous"
            srcset="
              https://img.clerk.com/static/metamask.svg?width=80  1x,
              https://img.clerk.com/static/metamask.svg?width=160 2x
            "
            src="https://img.clerk.com/static/metamask.svg?width=160"
            class="cl-socialButtonsProviderIcon cl-providerIcon cl-socialButtonsProviderIcon__metamask cl-providerIcon__metamask 🔒️ cl-internal-2gzuzc"
            alt="Sign in with MetaMask"
          />
          <span>MetaMask</span>
        </div>
        <div class="okx button" @click="connectWallet(1)">
          <img
            crossorigin="anonymous"
            srcset="
              https://img.clerk.com/static/okx_wallet.svg?width=80  1x,
              https://img.clerk.com/static/okx_wallet.svg?width=160 2x
            "
            src="https://img.clerk.com/static/okx_wallet.svg?width=160"
            class="cl-socialButtonsProviderIcon cl-providerIcon cl-socialButtonsProviderIcon__okx_wallet cl-providerIcon__okx_wallet 🔒️ cl-internal-2gzuzc"
            alt="Sign in with OKX Wallet"
          />
          <span>OKX Wallet</span>
        </div>
      </div>
      <div class="or_text">or</div>
      <div class="email_username">
        <div class="one">
          <div class="first_name">
            <div class="first_name_title">
              <div class="in_title">First name</div>
              <span>Optional</span>
            </div>
            <input type="text" placeholder="First name" />
          </div>
          <div class="last_name">
            <div class="last_name_title">
              <div class="in_title">Last name</div>
              <span>Optional</span>
            </div>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div class="two">
          <div class="user_name">
            <div class="user_name_title">
              <div class="in_title">Username</div>
            </div>
            <input type="text" placeholder="" />
          </div>
          <div class="email">
            <div class="email_title">
              <div class="in_title">Email address</div>
            </div>
            <input type="text" placeholder="Enter your email address" />
          </div>
        </div>
      </div>
      <div class="continue_box">
        <div class="continue_btn button">
          Continue<CaretRight style="width: 14px" />
        </div>
        <div class="have_a">
          Already have an account?
          <span class="button" @click="router.push('/sign-in')">Sign in</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.sign_up {
  height: 100vh;
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
