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
      <v-btn flat @click="$router.push('/apps')">配置管理</v-btn>
      <v-btn flat @click="$router.push('/users')" v-if="isRoot">用户管理</v-btn>
      <v-btn flat @click="$router.push('/clusters')">集群状态</v-btn>
      <v-btn flat @click="$router.push('/api-test')">接口测试</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat slot="activator">{{$store.state.loginEmail}}</v-btn>
        <v-list>
          <v-list-tile href @click="updatePwdDialog = !updatePwdDialog">
            <v-list-tile-content>
              <v-list-tile-title>修改密码</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-menu>

      <v-dialog v-if="updatePwdDialog" v-model="updatePwdDialog" max-width="800px">
        <d-update-user-pwd @finish="updatePwdDialog = false"></d-update-user-pwd>
      </v-dialog>
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
  import axios from 'axios'
  import Cookies from 'js-cookie'
  import DUpdateUserPwd from "../components/users/DUpdateUserPwd.vue"

  export default {
    name: "Top",
    components: {DUpdateUserPwd},
    data: () => ({
      isRoot: false,
      updatePwdDialog: false
    }),
    mounted() {
      axios.get(`/api/admins/user/root`).then(response => {
        this.$store.commit('rootEmail', response.data.root)
        this.isRoot = (response.data.root === this.$store.state.loginEmail)
      })
    },
    methods: {
      logout() {
        Cookies.remove('email')
        Cookies.remove('token')
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .logo
    background-image url("../images/duic200x60.png")
    background-repeat no-repeat
    background-position center
    background-size 90%
</style>
