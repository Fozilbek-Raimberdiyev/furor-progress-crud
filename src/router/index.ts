import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/posts',
    },
    {
      path: '/posts',
      name: 'posts',
      component: {
        render() {
          return h(resolveComponent('router-view'))
        },
      },
      children: [
        {
          path: '',
          component: () => import('../views/post/index.vue'),
          name: 'posts.index',
        },
        {
          path: 'create',
          component: () => import('../views/post/create.vue'),
          name: 'posts.create',
        },
        {
          path: 'update/:id',
          component: () => import('../views/post/update.vue'),
          name: 'posts.update',
        },
      ],
    },
  ],
})

export default router
