<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BlankView",
  components: {},
  computed: {
    ...mapState("setting", ["multiPage", "animate"]),
  },
};
</script>

<style scoped></style>
