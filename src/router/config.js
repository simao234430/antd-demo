import TabsView from "@/layouts/tabs/TabsView";
import BlankView from "@/layouts/BlankView";
import PageView from "@/layouts/PageView";
import RouteView from "@/layouts/RouteView";
// 路由配置
const options = {
  routes: [
    {
      path: "/login",
      name: "登录页",
      component: () => import("@/pages/login"),
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/pages/exception/404"),
    },
    {
      path: "/403",
      name: "403",
      component: () => import("@/pages/exception/403"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/pages/exception/404"),
    },
    {
      path: "/500",
      name: "500",
      component: () => import("@/pages/exception/500"),
    },
    {
      path: "/",
      name: "首页",
      component: TabsView,
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          meta: {
            icon: "dashboard",
          },
          component: BlankView,
          children: [
            {
              path: "workplace",
              name: "工作台",
              meta: {
                page: {
                  closable: false,
                },
              },
              component: () => import("@/pages/dashboard/workplace"),
            },
            {
              path: "analysis",
              name: "分析页",
              component: () => import("@/pages/dashboard/analysis"),
            },
          ],
        },
        {
          path: "result",
          name: "结果页",
          meta: {
            icon: "check-circle-o",
          },
          component: BlankView,
          children: [
            {
              path: "success",
              name: "成功",
              component: () => import("@/pages/result/Success"),
            },
            {
              path: "error",
              name: "失败",
              component: () => import("@/pages/result/Error"),
            },
          ],
        },
        {
          path: "list",
          name: "列表页",
          meta: {
            icon: "table",
          },
          component: PageView,
          children: [
            {
              path: "query",
              name: "查询表格",
              meta: {
                authority: "queryForm",
              },
              component: () => import("@/pages/list/QueryList"),
            },
            {
              path: "primary",
              name: "标准列表",
              component: () => import("@/pages/list/StandardList"),
            },
            {
              path: "card",
              name: "卡片列表",
              component: () => import("@/pages/list/CardList"),
            },
            {
              path: "search",
              name: "搜索列表",
              component: () => import("@/pages/list/search/SearchLayout"),
              children: [
                {
                  path: "article",
                  name: "文章",
                  component: () => import("@/pages/list/search/ArticleList"),
                },
                {
                  path: "application",
                  name: "应用",
                  component: () =>
                    import("@/pages/list/search/ApplicationList"),
                },
                {
                  path: "project",
                  name: "项目",
                  component: () => import("@/pages/list/search/ProjectList"),
                },
              ],
            },
          ],
        },
        {
          path: "form",
          name: "表单页",
          meta: {
            icon: "form",
            page: {
              cacheAble: false,
            },
          },
          component: PageView,
          children: [
            {
              path: "basic",
              name: "基础表单",
              component: () => import("@/pages/form/basic"),
            },
            {
              path: "step",
              name: "分步表单",
              component: () => import("@/pages/form/step"),
            },
            {
              path: "advance",
              name: "高级表单",
              component: () => import("@/pages/form/advance"),
            },
          ],
        },
        {
          path: "details",
          name: "详情页",
          meta: {
            icon: "profile",
          },
          component: BlankView,
          children: [
            {
              path: "basic",
              name: "基础详情页",
              component: () => import("@/pages/detail/BasicDetail"),
            },
            {
              path: "advance",
              name: "高级详情页",
              component: () => import("@/pages/detail/AdvancedDetail"),
            },
          ],
        },

        {
          path: "account",
          name: "个人页",
          meta: {
            icon: "profile",
          },
          component: RouteView,
          children: [
            {
              path: "center",
              name: "个人中心",
              component: () => import("@/pages/account/center/index"),
            },
            {
              path: "settings",
              // redirect: "settings/basic",
              name: "个人设置",

              component: () => import("@/pages/account/settings/Index"),
              children: [
                {
                  path: "basic",
                  name: "基本设置",
                  meta: {
                    invisible: true,
                  },
                  component: () =>
                    import("@/pages/account/settings/BasicSetting"),
                },
                {
                  path: "security",
                  name: "安全设置",
                  meta: {
                    invisible: true,
                  },
                  component: () => import("@/pages/account/settings/Security"),
                },
                {
                  path: "custom",
                  name: "个性化",
                  meta: {
                    invisible: true,
                  },
                  component: () => import("@/pages/account/settings/Custom"),
                },
                {
                  path: "binding",
                  name: "账号绑定",
                  meta: {
                    invisible: true,
                  },
                  component: () => import("@/pages/account/settings/Binding"),
                },
                {
                  path: "notification",
                  name: "新消息通知",
                  meta: {
                    invisible: true,
                  },
                  component: () =>
                    import("@/pages/account/settings/Notification"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default options;
