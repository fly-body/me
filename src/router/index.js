import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/Index.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index/Index.vue')
  },
  {
    path: '/fontStudy',
    name: 'fontStudy',
    component: () => import('../views/fontStudy/Index.vue'),
    children: [
      {
        path: 'inline',
        name: 'inline',
        component: () => import('../views/fontStudy/inline/Index.vue'),
      },
      {
        path: 'block',
        name: 'block',
        component: () => import('../views/fontStudy/block/Index.vue'),
      },
      {
        path: 'float',
        name: 'float',
        component: () => import('../views/fontStudy/float/Index.vue'),
      },
      {
        path: 'bfc',
        name: 'bfc',
        component: () => import('../views/fontStudy/bfc/Index.vue'),
      }, 
      {
        path: 'imgLayout',
        name: 'imgLayout',
        component: () => import('../views/fontStudy/imgLayout/Index.vue'),
      },
      {
        name: 'flex',
        path: 'flex',
        component: () => import('../views/fontStudy/flex/Index.vue'),
      },
      {
        path: 'canvas',
        name: 'canvas',
        component: () => import('../views/fontStudy/canvas/Index.vue'),
      },
      {
        path: 'scope',
        name: 'scope',
        component: () => import('../views/fontStudy/scope/Index.vue'),
      },
      {
        path: 'closePackage',
        name: 'closePackage',
        component: () => import('../views/fontStudy/closePackage/Index.vue'),
      },
      {
        path: 'lifecycle',
        name: 'lifecycle',
        component: () => import('../views/fontStudy/lifecycle/Index.vue'),
      },
      {
        path: 'route',
        name: 'route',
        component: () => import('../views/fontStudy/route/Index.vue'),
      },
      {
        path: 'axios',
        name: 'axios',
        component: () => import('../views/fontStudy/Index.vue'),
      },
      {
        path: 'vuex',
        name: 'vuex',
        component: () => import('../views/fontStudy/Index.vue'),
      },
      {
        path: 'cache',
        name: 'cache',
        component: () => import('../views/fontStudy/Index.vue'),
      }
    ]
  },
  {
    path: '/afterStudy',
    name: 'afterStudy',
    component: () => import('../views/afterStudy/Index.vue')
  },
  {
    path: '/fontProject',
    name: 'fontProject',
    component: () => import('../views/fontProject/Index.vue')
  },
  {
    path: '/afterProject',
    name: 'afterProject',
    component: () => import('../views/afterProject/Index.vue')
  },
]

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this.location, () => { }, () => { })
  }
}


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
