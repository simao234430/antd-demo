<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
      <span class="name">{{ user.name }}</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item @click="handleToCenter">
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item @click="handleToSettings">
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item @click="logout">
        <a-icon style="margin-right: 8px" type="poweroff" />
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/services/user";

export default {
  name: "HeaderAvatar",
  computed: {
    ...mapGetters("account", ["user"]),
  },
  methods: {
    handleToCenter() {
      this.$router.push({ path: "/account/center" });
    },
    handleToSettings() {
      this.$router.push({ path: "/account/settings" });
    },
    logout() {
      logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
.header-avatar {
  display: inline-flex;
  .avatar,
  .name {
    align-self: center;
  }
  .avatar {
    margin-right: 8px;
  }
  .name {
    font-weight: 500;
  }
}
.avatar-menu {
  width: 150px;
}
</style>
