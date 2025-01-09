// 管理所有的全局组件
import { App } from "vue";
import BBBOX from "./BBBOX.vue";
import Loading from "./Loading.vue";
// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("BBBOX", BBBOX);
    Vue.component("Loading", Loading);
  },
};
