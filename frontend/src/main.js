import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AboutPage from './views/AboutPage.vue';
import HomePage from './views/HomePage.vue';

const router = createRouter({
  linkActiveClass: 'navigation__link_active',
  linkExactActiveClass: 'navigation__link_active-exact',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    }
  ],
  history: createWebHistory()
})

const app = createApp(App);
app.use(router);
app.mount('#app');
