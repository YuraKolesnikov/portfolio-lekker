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
		path: '/trips/:direction',
		component: () => import(/* webpackChunkName: "trips" */'./views/Trips')
	},
	{
		path: '/trips/:direction/:id',
		component: () => import(/* webpackChunkName */'./views/SingleTrip')
	},
	{
		path: '/checkout',
		component: () => import(/* webpackChunkName */'./views/Checkout')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router