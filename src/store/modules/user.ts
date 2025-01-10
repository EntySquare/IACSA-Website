// 管理分类导航的数据
import { defineStore } from 'pinia'
import Utils from '@/utils'
// import { getUserInfo, UserInfo } from '@/apis/user'

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
