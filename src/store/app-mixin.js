import { mapState } from "vuex";

const baseMixin = {
  computed: {
    ...mapState({
      layout: (state) => state.setting.layout,
      navTheme: (state) => state.setting.theme,
      primaryColor: (state) => state.setting.color,
      colorWeak: (state) => state.setting.weak,
      fixedHeader: (state) => state.setting.fixedHeader,
      fixedSidebar: (state) => state.setting.fixedSidebar,
      contentWidth: (state) => state.setting.contentWidth,
      autoHideHeader: (state) => state.setting.autoHideHeader,

      isMobile: (state) => state.setting.isMobile,
      sideCollapsed: (state) => state.setting.sideCollapsed,
      multiTab: (state) => state.setting.multiTab,
    }),
    isTopMenu() {
      return this.layout === "topmenu";
    },
  },
  methods: {
    isSideMenu() {
      return !this.isTopMenu;
    },
  },
};

export { baseMixin };
