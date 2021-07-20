import config from "@/config";
import { formatFullPath } from "@/utils/i18n";

export default {
  namespaced: true,
  state: {
    isMobile: false,
    menuData: [],
    ...config,
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
    setMenuData(state, menuData) {
      state.menuData = menuData;
    },
  },
};
