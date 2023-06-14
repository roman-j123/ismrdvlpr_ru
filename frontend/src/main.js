import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import 'normalize.css/normalize.css'
import App from './App.vue';
import AboutPage from './views/AboutPage.vue';
import HomePage from './views/HomePage.vue';
import FirstPage from './views/FirstPage.vue';
import NotePage from './views/NotePage.vue';
import PageNotFound from './views/NotFoundPage.vue';

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return {
      top: 0,
    }
  },
  linkActiveClass: 'navigation__link_active',
  linkExactActiveClass: 'navigation__link_active-exact',
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/notes',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/note/:id',
      name: 'NotePage',
      props: true,
      component: NotePage,
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