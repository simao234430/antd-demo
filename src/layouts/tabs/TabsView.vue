<template>
  <admin-layout>
    <router-view />
  </admin-layout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout";

export default {
  name: "TabsView",
  components: { AdminLayout },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
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
.tabs-view {
  margin: -16px auto 8px;
  &.head.fixed {
    max-width: 1400px;
  }
}
.tabs-view-content {
  position: relative;
  &.head.fixed {
    width: 1400px;
    margin: 0 auto;
  }
}
</style>
