import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/topic/three',
    children: [
      {
        path: 'topic',
        name: 'topic',
        component: () => import('../views/TopicView.vue'),
        children: [{
          path: 'three',
          name: 'three',
          component: () => import('../views/topic/three/Three.vue'),
          meta: { title: '不重复的最长字串' }
        }]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta?.title as string || '个人项目';
  next();
});
export default router;
