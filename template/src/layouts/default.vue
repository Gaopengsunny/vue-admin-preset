<template>
  <i-layout id="app">
    <i-sider>
      <div class="container">
        <router-link class="logo" :to="{ nmae: 'home' }">
          <img src="@/assets/images/200_64_logo.png" alt="" />
        </router-link>
        <div class="menu">
          <i-menu width="auto" :active-name="name" accordion>
            <!-- <i-submenu name="1">
              <template slot="title">Navigation One</template>
              <i-menu-item name="1-1">112</i-menu-item>
            </i-submenu> -->
            <i-menu-item name="home" :to="{ name: 'home' }">首页</i-menu-item>
          </i-menu>
        </div>
      </div>
    </i-sider>
    <i-layout>
      <i-header></i-header>
      <i-content>
        <router-view />
      </i-content>
      <i-footer>{{ copyright }}</i-footer>
    </i-layout>
  </i-layout>
</template>

<script>
export default {
  computed: {
    copyright() {
      return `©  ${process.env.VUE_APP_START_YEAR}-${new Date().getFullYear()}`
    },
    name() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.ivu-menu-vertical.ivu-menu-light:after {
  display: none;
}
.ivu-layout-header {
  border-bottom: 1px solid $borderColor;
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: #fff;
}

.ivu-layout-sider {
  background-color: #fff;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.06);
  .container {
    height: 100%;
    @include flex();
    flex-direction: column;
    .logo {
      width: 100%;
      height: 64px;
      box-sizing: border-box;
      padding: 0 40px;
      border-bottom: 1px solid $borderColor;
      @include flex();
      img {
        width: 100%;
      }
    }
    .menu {
      flex: 1;
      overflow-y: scroll;
      width: 200px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.ivu-layout-content {
  padding: 20px;
  overflow: hidden;
}

.ivu-layout-footer {
  background-color: #fff;
  border-top: 1px solid $borderColor;
  @include flex();
}
</style>
