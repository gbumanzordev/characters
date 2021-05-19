import { createRouter, createWebHistory } from 'vue-router';
import Characters from '@/views/Characters';

const routes = [
  {
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/comics',
    name: 'Comics',
    component: () => import('../views/Comics'),
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('../views/Stories'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
