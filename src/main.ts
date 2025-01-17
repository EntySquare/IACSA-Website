import { createApp } from 'vue'
import App from './App.vue'
// 导入 normalize
import 'normalize.css'
// 导入自定义的公共样式
import '@/assets/styles/common.less'
// 导入路由
import router from './router/index'
// 导入复用组件
import plugin from './components/index'
// 导入 pinia
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

let pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(pinia).use(plugin).use(ElementPlus).mount('#app')
