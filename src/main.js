import Vue from "vue";
import App from "./App.vue";

import { initRouter } from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "@/mock";
import "./theme/index.less";
// import "ant-design-vue/dist/antd.css";
import bootstrap from "@/bootstrap";
import { initI18n } from "@/utils/i18n";
const router = initRouter(store.state.setting.asyncRoutes);
const i18n = initI18n("CN", "US");
Vue.config.productionTip = false;
Vue.use(Antd);

bootstrap({ router, store, i18n });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
