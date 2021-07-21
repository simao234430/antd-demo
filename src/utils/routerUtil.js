import { mergeI18nFromRoutes } from "@/utils/i18n";
//应用配置
let appOptions = {
  router: undefined,
  i18n: undefined,
  store: undefined,
};

/**
 * 设置应用配置
 * @param options
 */
function setAppOptions(options) {
  const { router, store, i18n } = options;
  appOptions.router = router;
  appOptions.store = store;
  appOptions.i18n = i18n;
}

/**
 * 加载路由
 * @param routesConfig {RouteConfig[]} 路由配置
 */
function loadRoutes() {
  // 应用配置
  const { router, store, i18n } = appOptions;
  // 提取路由国际化数据
  mergeI18nFromRoutes(i18n, router.options.routes);
  // 初始化Admin后台菜单数据
  const rootRoute = router.options.routes.find((item) => item.path === "/");
  const menuRoutes = rootRoute && rootRoute.children;
  if (menuRoutes) {
    store.commit("setting/setMenuData", menuRoutes);
  }
}

/**
 * 格式化路由
 * @param routes 路由配置
 */
function formatRoutes(routes) {
  routes.forEach((route) => {
    const { path } = route;
    if (!path.startsWith("/") && path !== "*") {
      route.path = "/" + path;
    }
  });
  // formatAuthority(routes);
}

/**
 * 从路由 path 解析 i18n key
 * @param path
 * @returns {*}
 */
function getI18nKey(path) {
  const keys = path
    .split("/")
    .filter((item) => !item.startsWith(":") && item != "");
  keys.push("name");
  return keys.join(".");
}

/**
 * 加载导航守卫
 * @param guards
 * @param options
 */
function loadGuards(guards, options) {
  const { beforeEach, afterEach } = guards;
  const { router } = options;
  beforeEach.forEach((guard) => {
    if (guard && typeof guard === "function") {
      router.beforeEach((to, from, next) => guard(to, from, next, options));
    }
  });
  afterEach.forEach((guard) => {
    if (guard && typeof guard === "function") {
      router.afterEach((to, from) => guard(to, from, options));
    }
  });
}

export { formatRoutes, setAppOptions, loadRoutes, getI18nKey, loadGuards };
