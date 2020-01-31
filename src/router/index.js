import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Onboarding from '../views/Onboarding.vue';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';
import Error404 from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
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
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile,
	},
	{
		path: '*',
		component: Error404,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
