import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import StoreItems from '@/components/StoreItems'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/storeitems',
      name: 'StoreItems',
      component: StoreItems
    },
    {
      path: '/confirmAccount/:token',
      name: 'Registration',
      component: Registration
    }
  ]
})
