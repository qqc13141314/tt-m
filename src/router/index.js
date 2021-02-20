import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import shouye from '@/views/shouye/index.vue'
import Article from '@/views/article/index.vue'
import Image1 from '@/views/image/index.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'shouye',
        component: shouye
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/image',
        name: 'image',
        component: Image1
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path !== '/login') {
    if (user) {
      next()
    } else (next('/login'))
  } else {
    next()
  }
})

export default router
