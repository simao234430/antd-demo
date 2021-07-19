import Vue from "vue";
import Router from "vue-router";
import { formatRoutes } from "@/utils/routerUtil";
Vue.use(Router);

/**
 * 初始化路由实例
 * @param isAsync 是否异步路由模式
 * @returns {VueRouter}
 */
function initRouter(isAsync) {
  const options = isAsync
    ? require("./async/config.async").default
    : require("./config").default;
  formatRoutes(options.routes);
  return new Router(options);
}

export { initRouter };
