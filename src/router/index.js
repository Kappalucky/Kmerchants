import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';
import Onboarding from '../views/Onboarding.vue';
import CompanyPage from '../views/CompanyPage.vue';
import Dashboard from '../views/Dashboard.vue';
import AddCompany from '../views/AddCompany.vue';
import Profile from '../views/Profile.vue';
import Error404 from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.userComplete == true) {
        next('/dashboard');
      } else {
        next();
      }
    },
  },
  {
    path: '/onboard',
    name: 'onboarding',
    component: Onboarding,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (store.getters.userComplete === false) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/add-company',
    name: 'add-company',
    component: AddCompany,
    beforeEnter: (to, from, next) => {
      if (store.getters.userComplete == false) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/company/:id',
    name: 'company-page',
    component: CompanyPage,
    beforeEnter: (to, from, next) => {
      if (store.getters.userComplete == false) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (store.getters.userComplete == false) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '*',
    component: Error404,
    beforeRouteLeave: (to, from, next) => {
      if (to.path == '/' && store.getters.userComplete == true) {
        next('/dashboard');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
