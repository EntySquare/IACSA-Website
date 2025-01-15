// 管理网络请求
import axios from 'axios'
import Utils from '@/utils'
import { toast } from 'vue-sonner'
import useStore from '@/store'
import { storeToRefs } from 'pinia'

// 创建 axios 副本对象
let request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})
// 设置请求拦截器
request.interceptors.request.use(
  config => {
    const { main } = useStore()
    const { loading } = storeToRefs(main)
    loading.value = true
    config.headers.token = Utils.tokenFn.getToken()
    return config
  },
  err => {
    const { main } = useStore()
    const { loading } = storeToRefs(main)
    loading.value = false
    return Promise.reject(err)
  }
)
// 设置响应拦截器
request.interceptors.response.use(
  response => {
    const { main } = useStore()
    const { loading } = storeToRefs(main)
    console.log('response:', response)
    if (response.data.code == 0) {
      toast.success(response.data.json.message_zh)
      loading.value = false
      return response.data
    } else {
      toast.warning(response.data.json.message_zh)
      loading.value = false
      return null
    }
  },
  err => {
    const { main } = useStore()
    const { loading } = storeToRefs(main)
    loading.value = false
    return Promise.reject(err)
  }
)
// 暴露对象
export default request
