import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import JournalView from '../views/JournalView.vue';
import ContactView from '../views/ContactView.vue';

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
          name: 'About',
          component: AboutView
        },
        {
          path: '/journal',
          name: 'Journal',
          component: JournalView
        },
        {
          path: '/contact',
          name: 'Contact',
          component: ContactView
        }
      ]
    }
  ]
})

export default router
