import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/people',
    alias: ['/'],
    name: 'ViewUserList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewUserList.vue')
  },
  {
    path: '/person/:id',
    name: 'ViewPerson',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewPerson.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
