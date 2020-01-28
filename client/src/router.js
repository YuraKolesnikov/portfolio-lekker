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
		component: () => import(/* webpackChunkName */'./views/Typography')
	},
	{
		path: '/buttons',
		component: () => import('./views/Buttons')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router