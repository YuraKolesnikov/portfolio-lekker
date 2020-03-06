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
		path: '/buttons',
		component: () => import('./views/Buttons')
	},
	{
		path: '/trips',
		component: () => import('./views/Trips')
	},
	{
		path: '/single-trip',
		component: () => import('./views/SingleTrip')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router