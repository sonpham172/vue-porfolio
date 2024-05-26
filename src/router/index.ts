import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import JournalView from '../views/JournalView.vue';
import ProjectView from '@/views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Public',
      component: () => import('../layouts/TheDefaultLayout.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'About Me',
          component: AboutView
        },
        {
          path: '/journal',
          name: 'Journal from 2019',
          component: JournalView
        },
        {
          path: '/project/:projectId',
          name: 'My Project',
          component: ProjectView
        }
      ]
    }
  ]
})

export default router
