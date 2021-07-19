import Vue from "vue";
import App from "./App.vue";

import { initRouter } from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "./theme/index.less";
// import "ant-design-vue/dist/antd.css";

const router = initRouter(store.state.setting.asyncRoutes);

Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
