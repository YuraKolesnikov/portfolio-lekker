import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/inputs',
		component: () => import(/* webpackChunkName */'./views/Inputs')
	},
	{
		path: '/typography',
		component: () => import('./views/Typography')
	},
	{
		path: '/trips',
		component: () => import('./views/Trips')
	},
	{
		path: '/trip-details',
		component: () => import('./views/SingleTrip')
	},
	{
		path: '/checkout',
		component: () => import('./views/Checkout')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 })
})

export default router