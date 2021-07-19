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
export { formatRoutes };
