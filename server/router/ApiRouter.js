const express = require('express')

const { v1Router } = require('./V1Router')

class ApiRouter {
	constructor(router, routes) {
		this.router = router
		this.routes = routes
		this.setupApiRoutes(routes)
	}

	get apiRouter() {
		return this.router
	}

	addApiRoute(url, router) {
		this.router.use(url, router)
	}

	setupApiRoutes(routes) {
		routes.forEach(route => {
			this.addApiRoute(route.url, route.router)
		})
	}
}

const routes = [
  { url: '/1.0', router: v1Router }
]
module.exports = {
	ApiRouter,
	apiRouter: new ApiRouter(express.Router(), routes).apiRouter
}