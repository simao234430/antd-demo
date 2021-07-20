<template>
  <a-layout :class="['admin-layout', 'beauty-scroll']">
    <side-menu
      :collapsed="collapsed"
      :collapsible="true"
      :theme="theme.mode"
      :menuData="firstMenu"
    ></side-menu>
    <a-layout class="admin-layout-main beauty-scroll">
      <!-- <a-layout-header></a-layout-header> -->
      <admin-header
        :collapsed="collapsed"
        v-on:toggleCollapse="toggleCollapse"
      ></admin-header>

      <a-layout-content
        :style="{
          margin: '24px 16px ',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <page-footer :link-list="footerLinks" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminHeader from "./header/AdminHeader";
import PageFooter from "./footer/PageFooter";
import SideMenu from "../components/menu/SideMenu.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "AdminLayout",
  components: { SideMenu, AdminHeader, PageFooter },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState("setting", [
      "isMobile",
      "theme",
      "layout",
      "footerLinks",
      "copyright",
    ]),
    ...mapGetters("setting", ["firstMenu", "subMenu", "menuData"]),
    // sideMenuData() {
    //   const { layout, menuData, subMenu } = this;
    //   //return layout === "mix" ? subMenu : menuData;
    //   return subMenu;
    // },
  },
  watch: {},
  methods: {
    toggleCollapse() {
      console.log(" admin toggleCollapse");
      this.collapsed = !this.collapsed;
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang="less" scoped>
.admin-layout {
  .side-menu {
    &.fixed-side {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
    }
  }
  .virtual-side {
    transition: all 0.2s;
  }
  .virtual-header {
    transition: all 0.2s;
    opacity: 0;
    &.fixed-tabs.multi-page:not(.fixed-header) {
      height: 0;
    }
  }
  .admin-layout-main {
    .admin-header {
      top: 0;
      right: 0;
      overflow: hidden;
      transition: all 0.2s;
      &.fixed-tabs.multi-page:not(.fixed-header) {
        height: 0;
      }
    }
  }
  .admin-layout-content {
    padding: 24px 24px 0;
    /*overflow-x: hidden;*/
    /*min-height: calc(100vh - 64px - 122px);*/
  }
  .setting {
    background-color: @primary-color;
    color: @base-bg-color;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    box-shadow: -2px 0 8px @shadow-color;
  }
}
</style>
