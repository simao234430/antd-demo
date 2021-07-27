import config from "@/config";
import { formatFullPath } from "@/utils/i18n";
import { getLocalSetting } from "@/utils/themeUtil";
import { ADMIN } from "@/config/default";
const localSetting = getLocalSetting(true);

const customTitlesStr = sessionStorage.getItem(
  process.env.VUE_APP_TBAS_TITLES_KEY
);
const customTitles = (customTitlesStr && JSON.parse(customTitlesStr)) || [];

export default {
  namespaced: true,
  state: {
    isMobile: false,
    menuData: [],
    animates: ADMIN.animates,
    palettes: ADMIN.palettes,
    activatedFirst: undefined,
    ...config,
    customTitles,
    ...localSetting,
  },
  getters: {
    menuData(state) {
      const { menuData } = state;
      if (menuData.length > 0 && !menuData[0].fullPath) {
        formatFullPath(menuData);
      }
      return menuData;
    },
    firstMenu(state, getters) {
      // if (state.filterMenu) {
      //   const { permissions, roles } = rootState.account;
      //   return filterMenu(deepClone(state.menuData), permissions, roles);
      // }
      const { menuData } = getters;
      if (menuData.length > 0 && !menuData[0].fullPath) {
        formatFullPath(menuData);
      }
      return menuData.map((item) => {
        const menuItem = { ...item };
        // delete menuItem.children;
        return menuItem;
      });
    },
    subMenu(state) {
      const { menuData, activatedFirst } = state;
      if (menuData.length > 0 && !menuData[0].fullPath) {
        formatFullPath(menuData);
      }
      const current = menuData.find((menu) => menu.fullPath === activatedFirst);
      return (current && current.children) || [];
    },
  },
  mutations: {
    setFixedTabs(state, fixedTabs) {
      state.fixedTabs = fixedTabs;
    },
    setTheme(state, theme) {
      console.log(theme);
      state.theme = theme;
    },
    setMenuData(state, menuData) {
      state.menuData = menuData;
    },
    setLayout(state, layout) {
      state.layout = layout;
    },
    setLang(state, lang) {
      state.lang = lang;
    },
    setWeekMode(state, weekMode) {
      console.log(state.weekMode);
      console.log(weekMode);
      state.weekMode = weekMode;
    },
    setMultiPage(state, multiPage) {
      state.multiPage = multiPage;
    },
    correctPageMinHeight(state, minHeight) {
      state.pageMinHeight += minHeight;
    },
    setActivatedFirst(state, activatedFirst) {
      state.activatedFirst = activatedFirst;
    },
  },
};
