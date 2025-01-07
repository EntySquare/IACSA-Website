import Web3 from 'web3'

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

async function connectWallet () {
  try {
    checkNetwork()
    const one = await window.okxwallet.request({
      method: 'eth_requestAccounts'
    })
    console.log('one:', one)
  } catch (error) {}
}

export default connectWallet
