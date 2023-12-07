import { createRouter, createWebHistory } from 'vue-router'
import HomeUsersView from '@/views/users/HomeUsersView.vue'
import DescriptionUserView from '@/views/users/DescriptionUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeUsersView
    },
    {
      path: '/users/:id',
      name: 'user',
      component: DescriptionUserView
    }
  ]
})

export default router
