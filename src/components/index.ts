// 管理所有的全局组件
import { App } from "vue";
import BBBOX from "./BBBOX.vue";
import Loading from "./Loading.vue";
import Open from "./Open.vue";
import IBuild from "./IBuild.vue";
import WHAT from "./WHAT.vue";
import BUILD from "./BUILD.vue";
import INVESTORS from "./INVESTORS.vue";
import Seeking from "./Seeking.vue";
import Carousel from "./Carousel.vue";
import svgIcon from "./svg.vue";

// 将全局组件封装到插件中
export default {
  install(Vue: App) {
    Vue.component("BBBOX", BBBOX);
    Vue.component("Loading", Loading);
    Vue.component("Open", Open);
    Vue.component("IBuild", IBuild);
    Vue.component("WHAT", WHAT);
    Vue.component("BUILD", BUILD);
    Vue.component("INVESTORS", INVESTORS);
    Vue.component("Seeking", Seeking);
    Vue.component("Carousel", Carousel);
    Vue.component("svgIcon", svgIcon);
  },
};
