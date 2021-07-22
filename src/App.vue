<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import themeUtil from "@/utils/themeUtil";
export default {
  name: "App",
  components: {},
  data() {
    return {
      locale: {},
    };
  },
  created() {
    // this.setHtmlTitle();
    console.log("created");
    this.setLanguage(this.lang);
    // enquireScreen((isMobile) => this.setDevice(isMobile));
  },
  watch: {
    lang(val) {
      this.setLanguage(val);
      // this.setHtmlTitle();
    },
    "theme.color": function (val) {
      let closeMessage = this.$message.loading(
        `您选择了主题色 ${val}, 正在切换...`
      );
      themeUtil.changeThemeColor(val, this.theme.mode).then(closeMessage);
    },
    "theme.mode": function (val) {
      let closeMessage = this.$message.loading(
        `您选择了主题模式 ${val}, 正在切换...`
      );
      themeUtil.changeThemeColor(this.theme.color, val).then(closeMessage);
    },
    layout: function () {
      window.dispatchEvent(new Event("resize"));
    },
  },
  computed: {
    ...mapState("setting", ["layout", "theme", "weekMode", "lang"]),
  },
  methods: {
    // ...mapMutations("setting", ["setDevice"]),

    setLanguage(lang) {
      this.$i18n.locale = lang;
      switch (lang) {
        case "CN":
          this.locale =
            require("ant-design-vue/es/locale-provider/zh_CN").default;
          break;
        case "HK":
          this.locale =
            require("ant-design-vue/es/locale-provider/zh_TW").default;
          break;
        case "US":
        default:
          this.locale =
            require("ant-design-vue/es/locale-provider/en_US").default;
          break;
      }
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
