<script lang="ts" setup>
import connectWallet from '@/web3/connectWallet'
import { MetaMaskSDK } from '@metamask/sdk'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { nextTick, onMounted, reactive, ref } from 'vue'
import router from '@/router'
const { user } = useStore()
const { user_name, email_address, email_code, email_code_timer } =
  storeToRefs(user)

const verificationCodes = ref(['', '', '', '', '', ''])

const handleInput = (index: number, event: any) => {
  let value = event.target.value
  if (!/^\d$/.test(value)) {
    value = +value.toString().slice(0, 1)
  }

  if (!value) {
    verificationCodes.value[index] = ''
  } else {
    verificationCodes.value[index] = value
    if (index == 5) {
      email_code.value = verificationCodes.value.join('')
      user.postRegister()
    }
  }

  // 自动跳到下一个输入框
  if (value && index < verificationCodes.value.length - 1) {
    const nextInput = event.target.nextElementSibling
    if (nextInput) {
      nextTick(() => {
        nextInput.focus()
      })
    }
  }
}
const handleKeyDown = (index: number, event: any) => {
  // 阻止用户输入 e、E、+、-
  if (
    event.key === 'e' ||
    event.key === 'E' ||
    event.key === '+' ||
    event.key === '-'
  ) {
    event.preventDefault()
  }

  // 处理删除操作
  if (event.key === 'Backspace' && !event.target.value && index > 0) {
    const prevInput = event.target.previousElementSibling
    if (prevInput) {
      nextTick(() => {
        prevInput.focus()
      })
    }
  }
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault() // 阻止默认粘贴行为
  // 获取粘贴的内容
  const pastedData = event.clipboardData?.getData('text') || ''
  verificationCodes.value.forEach(i => (i = ''))
  if (/^\d{6}$/.test(pastedData)) {
    verificationCodes.value = [...pastedData.toString().split('').slice(0, 6)]
    // 聚焦到最后一个输入框
    const inputs = document.querySelectorAll('input')
    const lastInput = inputs[6 - 1] as HTMLInputElement
    if (lastInput) {
      nextTick(() => {
        lastInput.focus()
        email_code.value = verificationCodes.value.join('')
        user.postRegister()
      })
    }
    // 如果粘贴的数字长度正好是 6 位，则触发完成逻辑
  }
}

const remainingTime = ref(0) // 剩余倒计时时间（秒）
const isCounting = ref(false) // 是否正在倒计时
let interval: ReturnType<typeof setInterval> // 定时器引用

// 开始倒计时
const startCountdown = () => {
  // 更新倒计时状态
  isCounting.value = true

  // 启动定时器
  interval = setInterval(() => {
    const now = Date.now()
    const targetTime = parseInt(email_code_timer.value) // 转为数字类型
    const diff = Math.max(0, Math.floor((targetTime - now) / 1000)) // 计算剩余时间（秒）

    remainingTime.value = diff

    // 如果倒计时结束，清除定时器
    if (diff <= 0) {
      clearInterval(interval)
      isCounting.value = false
    }
  }, 1000)
}
onMounted(() => {
  nextTick(() => {
    const now = Date.now()
    const targetTime = parseInt(email_code_timer.value) // 转为数字类型
    const diff = Math.max(0, Math.floor((targetTime - now) / 1000)) // 计算剩余时间（秒）
    remainingTime.value = diff
    if (diff) {
      startCountdown()
    }
  })
})

const continueFn = () => {}
</script>
<template>
  <div class="sign_up">
    <div class="content_body">
      <div class="title">Verify your email</div>
      <div class="text_1">Enter the verification code sent to your email</div>
      <div class="email_address_text" @click="router.push('/sign-up/continue')">
        <span>{{ email_address }}</span
        ><EditPen style="height: 15px; color: rgba(255, 255, 255, 0.812)" />
      </div>
      <div v-if="0" class="tips">
        <el-icon
          ><WarnTriangleFilled style="width: 16px; height: 16px; color: red"
        /></el-icon>
      </div>
      <div class="verification-container">
        <input
          v-for="(code, index) in verificationCodes"
          :key="index"
          v-model="verificationCodes[index]"
          @paste="handlePaste"
          @input="handleInput(index, $event)"
          @keydown="handleKeyDown(index, $event)"
          maxlength="1"
          type="number"
          class="verification-input"
        />
      </div>
      <div class="resend_code" :style="{ opacity: isCounting ? 0.5 : 1 }">
        Didn't receive a code? Resend
        <span v-if="isCounting">( {{ remainingTime }} )</span>
      </div>
      <div class="continue_box">
        <div class="continue_btn button" @click="continueFn">
          Continue<CaretRight style="width: 14px" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.sign_up {
  min-height: 100vh;
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
      //   margin-bottom: 2.5rem;
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
.verification-container {
  display: flex;
}

.verification-input {
  width: 40px;
  height: 36px;
  margin-right: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.202);
  border-radius: 5px;
  color: white;
  background: transparent;
  &:last-child {
    margin-right: 0;
  }
}

.verification-input:focus {
  outline: none;
  // border-color: #007bff;
  // box-shadow: 0 0 5px #007bff;
}

.resend_code {
  color: @themeColor;
  padding: 28px 0 10px;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: normal;
  font-weight: 400;
  line-height: 1.38462;
}
.email_address_text {
  display: flex;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
  margin: 0px;
  font-size: 13px;
  font-family: inherit;
  letter-spacing: normal;
  font-weight: 400;
  line-height: 1.38462;
  color: rgba(255, 255, 255, 0.812);
  overflow-wrap: break-word;
  padding: 8px 0 30px;
}
/* 适用于 Chrome、Edge 和 Safari 浏览器 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none; /* 隐藏默认样式 */
  margin: 0; /* 移除多余的间距 */
}

/* 适用于 Firefox 浏览器 */
input[type='number'] {
  -moz-appearance: textfield; /* 将样式改为文本字段 */
}
</style>
