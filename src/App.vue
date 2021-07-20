<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import { mapState, mapMutations } from "vuex";

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
  },
  computed: {
    ...mapState("setting", ["lang"]),
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
