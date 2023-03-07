import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=> import('../views/index/Index.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: ()=> import('../views/index/Index.vue')
  },
  {
    path: '/fontStudy',
    name: 'fontStudy',
    component: ()=> import('../views/fontStudy/Index.vue')
  },
  {
    path: '/afterStudy',
    name: 'afterStudy',
    component: ()=> import('../views/afterStudy/Index.vue')
  },
  {
    path: '/fontProject',
    name: 'fontProject',
    component: ()=> import('../views/fontProject/Index.vue')
  },
  {
    path: '/afterProject',
    name: 'afterProject',
    component: ()=> import('../views/afterProject/Index.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
