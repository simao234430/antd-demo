import Vue from "vue";
import App from "./App.vue";

import { initRouter } from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import Viser from "viser-vue";
import "@/mock";
import "./theme/index.less";
// import "ant-design-vue/dist/antd.css";
import bootstrap from "@/bootstrap";
import { initI18n } from "@/utils/i18n";
import Plugins from "@/plugins";
const router = initRouter(store.state.setting.asyncRoutes);
const i18n = initI18n("CN", "US");
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Viser);
Vue.use(Plugins);
bootstrap({ router, store, i18n, message: Vue.prototype.$message });
// console.log(process.env.VUE_APP_USER_KEY);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
