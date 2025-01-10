import Web3 from 'web3'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import router from '@/router'
const { user, main } = useStore()
const { wallet_address, message, signature } = storeToRefs(user)
const { loading } = storeToRefs(main)
wallet_address.value = ''
message.value = ''
signature.value = ''

declare global {
  interface Window {
    ethereum: any
    okxwallet: any
  }
}
const { ethereum } = window
// 初始化 Web3
const web3 = new Web3(ethereum)

async function checkNetwork () {
  const chainId = await ethereum.request({ method: 'eth_chainId' })
  console.log('当前链 ID: ', chainId)
  // 根据需要检查链ID，1 是以太坊主网，56 是币安智能链等
  if (chainId !== '0x1') {
    // 如果不是以太坊主网（Chain ID 1）
    console.log('请切换到以太坊主网')
  }
}

async function connectWallet (type: number) {
  try {
    const msg =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    const accounts = await window.okxwallet.request({
      method: 'eth_requestAccounts'
    })
    const account = accounts[0]
    const signatureV = await window.okxwallet.request({
      method: 'personal_sign',
      params: [msg, account] // 参数顺序是: [消息, 签名账户地址]
    })
    if (signatureV.toString()) {
      wallet_address.value = accounts[0]
      message.value = msg
      signature.value = signatureV!.toString()
      loading.value = true
      let timer = setInterval(() => {
        if (wallet_address.value != '') {
          if (type) {
            router.push('/sign-up/continue')
          } else {
            const res = user.postLogin()
          }
          loading.value = false
          clearInterval(timer)
        }
      }, 100)
    }
  } catch (error) {}
}

export default connectWallet
