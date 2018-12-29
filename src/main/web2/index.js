import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
// ===================================================================================================
import 'vuetify/dist/vuetify.css'

import Main from './pages/Main.vue'
// ===================================================================================================

Vue.use(VueRouter)
Vue.use(Vuetify)

// ===================================================================================================
import {router} from './router/index'

new Vue({
    el: "#app",
    render: h => h(Main),
    router
})
