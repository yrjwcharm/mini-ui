import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Add from '@/views/NewAdd'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{

      }
    },
    {
      path:'/add',
      component:Add,
      meta:{

      }
    }

  ]
})

export default router
