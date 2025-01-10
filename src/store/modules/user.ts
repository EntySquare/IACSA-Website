// 管理分类导航的数据
import { defineStore } from 'pinia'
import Utils from '@/utils'
import { register, login } from '@/apis/login'

let UserStore = defineStore('user', {
  persist: true,
  state: () => ({
    is_login: !Utils.tokenFn.tokenIsExpired(),
    userInfo: {},
    wallet_address: '',
    message: '',
    signature: '',
    user_name: '',
    first_name: '',
    last_name: '',
    email_address: '',
    email_code: '',
    skill_ids: [],
    role_ids: [],
    email_code_timer: ''
  }),
  actions: {
    async postRegister () {
      var data = {
        wallet_address: this.wallet_address,
        message: this.message,
        signature: this.signature,
        user_name: this.user_name,
        first_name: this.first_name,
        last_name: this.last_name,
        email_address: this.email_address,
        email_code: this.email_code,
        skill_ids: this.skill_ids,
        role_ids: this.role_ids
      }
      console.log('r_data:', data)
      // var { json } = await register(data)
      // console.log('data:', json)
      this.remakeData()

      // if (data) {
      //   this.userInfo = data
      // }
    },
    async postLogin () {
      var data = {
        wallet_address: this.wallet_address,
        message: this.message,
        signature: this.signature,
        email_address: this.email_address,
        email_code: this.email_code
      }
      var res = await login(data)
      console.log('res:', res)
      this.remakeData()
      // console.log('data:', json)
      // if (data) {
      //   this.userInfo = data
      // }
    },
    remakeData () {
      this.wallet_address = ''
      this.message = ''
      this.signature = ''
      this.user_name = ''
      this.first_name = ''
      this.last_name = ''
      this.email_address = ''
      this.email_code = ''
      this.skill_ids = []
      this.role_ids = []
      this.email_code_timer = ''
    },
    async getUserInfo () {
      // const { data } = await getUserInfo()
      // if (data) {
      //   this.userInfo = data
      // }
    }
  },
  getters: {}
})
export default UserStore
