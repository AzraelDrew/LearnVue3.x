import HomePage from './pages/HomePage.vue';
import NavBar from './pages/NavBar.vue';
import FooterView from './pages/FooterView.vue';
import FooterViewAbout from './pages/FooterViewAbout.vue';
import AboutMe from './pages/AboutMe.vue';
import Test from './pages/Test.vue';
import Blogs from './pages/Blogs.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    components: {
      nav: NavBar,
      default: HomePage,
      footer: FooterView,
    },
  },
  {
    path: '/about',
    components: {
      nav: NavBar,
      default: AboutMe,
      footer: FooterViewAbout,
    },
  },
  {
    path: '/test',
    components: {
      nav: NavBar,
      default: Test,
      footer: FooterView,
    },
  },
  {
    path: '/blogs',
    components: {
      nav: NavBar,
      default: Blogs,
      footer: FooterView,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
