// 管理网络请求
import axios from 'axios'
import Utils from '@/utils'
import { toast } from 'vue-sonner'
// 创建 axios 副本对象
let request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})
// 设置请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.token = Utils.tokenFn.getToken()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 设置响应拦截器
request.interceptors.response.use(
  response => {
    if (response.data.code == 0) {
      return response.data
    } else {
      // toast(response.data.data.message)
      return {}
    }
  },
  err => {
    return Promise.reject(err)
  }
)
// 暴露对象
export default request
