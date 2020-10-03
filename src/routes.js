import Vue from 'vue'
import VueRouter from 'vue-router'

import UserList from './views/UserList'
import User from './views/User'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: UserList},
    { path: '/user', component: User }
  ]
})