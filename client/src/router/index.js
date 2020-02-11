import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/', 
      component: () => import(/* webpackChunkName: "list" */ '../components/List.vue')
    }
  ]
})

export default router
