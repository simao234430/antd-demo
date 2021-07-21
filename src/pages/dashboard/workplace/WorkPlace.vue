<template>
  <div class="">{{ welcome.timeFix[lang] }}</div>
</template>

<script>
import { request, METHOD } from "@/utils/request";
import { mapState } from "vuex";
export default {
  name: "WorkPlace",
  components: {},
  data() {
    return {
      projects: [],
      loading: true,
      activities: [],
      teams: [],
      welcome: {
        timeFix: "",
        message: "",
      },
    };
  },
  computed: {
    ...mapState("setting", ["lang"]),
  },
  watch: {},
  methods: {},
  created() {
    console.log("request");
    request("/user/welcome", METHOD.GET).then(
      (res) => (this.welcome = res.data)
    );
    console.log("after request");
  },
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
//@import url(); 引入公共css类
</style>
