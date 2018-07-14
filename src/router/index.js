import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import StoreItems from '@/components/StoreItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Hello
    },
    {
      path: '/storeitems',
      name: 'StoreItems',
      component: StoreItems
    }
  ]
})
