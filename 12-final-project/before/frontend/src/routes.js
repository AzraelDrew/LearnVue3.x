import HomePage from './pages/HomePage.vue';

import SearchPage from './pages/SearchPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import ProfileEdittingPage from './pages/ProfileEdittingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/search_result',
    name: 'SearchResult',
    component: SearchPage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/profile/edit',
    name: 'ProfilEdit',
    component: ProfileEdittingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export { router };
