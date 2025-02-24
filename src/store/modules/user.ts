// 管理分类导航的数据
import { defineStore } from 'pinia'
import Utils from '@/utils'
import { register, login, queryBasicUserInfo } from '@/apis/login'
import router from '@/router'

let UserStore = defineStore('user', {
  persist: true,
  state: () => ({
    is_login: Utils.tokenFn.tokenIsExpired() || false,
    userInfo: {} as any,
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
      var { json } = (await register(data)) as any
      console.log('data:', json)
      this.remakeData()

      if (json) {
        Utils.tokenFn.setToken(json.token)
        this.remakeData()
        router.push('/')
        return true
      } else return false
    },
    async postLogin () {
      var data = {
        wallet_address: this.wallet_address,
        message: this.message,
        signature: this.signature,
        email_address: this.email_address,
        email_code: this.email_code
      }
      var { json } = (await login(data)) as any
      if (json) {
        Utils.tokenFn.setToken(json.token)
        this.remakeData()
        this.getUserInfo()
        return true
      } else return false
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
      const res = (await queryBasicUserInfo()) as any
      if (res.code == 0) {
        this.userInfo = res.json
      }
      // const { data } = await getUserInfo()
      // if (data) {
      //   this.userInfo = data
      // }
    }
  },
  getters: {}
})
export default UserStore
