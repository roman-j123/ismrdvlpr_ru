import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import 'normalize.css/normalize.css'
import App from './App.vue';
import AboutPage from './views/AboutPage.vue';
import HomePage from './views/HomePage.vue';
import PageNotFound from './views/NotFoundPage.vue';

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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  history: createWebHistory()
})

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');