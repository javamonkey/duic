<template>
  <v-toolbar>
    <v-toolbar-title>
      <img
        src="../images/duic200x60.png"
        height="40"
        style="vertical-align: middle"
      >
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>配置管理</v-btn>
      <v-btn flat>用户管理</v-btn>
      <v-btn flat>集群状态</v-btn>
      <v-btn flat>接口测试</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn
        flat
        style="min-width: 24px"
        @click="logout">
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: "Top"
  }
</script>

<style lang="stylus" scoped>
  .logo
    background-image url("../images/duic200x60.png")
    background-repeat no-repeat
    background-position center
    background-size 90%
</style>
