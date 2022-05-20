import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

export default createRouter({
  // metadata object to define routes
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
  ],
});
