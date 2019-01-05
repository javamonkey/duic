<template>
  <div>
    <top/>

    <div>
      <router-view/>
    </div>

    <!-- 未认证模式框 -->
    <v-dialog v-model="noLoginDialog" max-width="290" @input="$store.commit('loginState', true)">
      <v-card>
        <v-card-title class="headline">登录过期/未登录</v-card-title>
        <v-card-text>跳转至登录页面进行重新登录，会丢失当前页面操作</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" flat @click="$router.push('/login')">跳转</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Top from "./Top";
  import Cookies from 'js-cookie'
  import {mapState} from 'vuex'

  export default {
    name: "Main",
    components: {Top},
    computed: {
      ...mapState(['loginState']),
      noLoginDialog() {
        return !this.loginState
      }
    },
    created() {
      let state = !!Cookies.get('email')
      if (state) {
        let email = Cookies.get('email')
        this.$store.commit('loginState', state)
        this.$store.commit('loginEmail', email)
      } else {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>
