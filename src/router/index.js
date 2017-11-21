import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user-list',
      name: 'UserList',
      components: {
        default: Home,
        sidePanel: UserList
      },
      children: [
        {
          path: 'add-user',
          component: AddUser
        }
      ]
    }
  ]
})
