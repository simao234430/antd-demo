import { loginIgnore } from "@/router/index";
import { checkAuthorization } from "@/utils/request";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

/**
 * 进度条开始
 * @param to
 * @param form
 * @param next
 */
const progressStart = (to, from, next) => {
  // start progress bar
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  next();
};

/**
 * 登录守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
const loginGuard = (to, from, next, options) => {
  const { message } = options;
  if (!loginIgnore.includes(to) && !checkAuthorization()) {
    message.warning("登录已失效，请重新登录");
    next({ path: "/login" });
  } else {
    next();
  }
};

/**
 * 进度条结束
 * @param to
 * @param form
 * @param options
 */
const progressDone = () => {
  // finish progress bar
  NProgress.done();
};

export default {
  beforeEach: [progressStart, loginGuard],
  afterEach: [progressDone],
};
