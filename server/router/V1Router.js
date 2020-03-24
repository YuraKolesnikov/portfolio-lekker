const express = require('express')

const { destinationsRouter } = require('./destinationsRouter')

class V1Router {
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
  { url: '/destinations', router: destinationsRouter }
]
module.exports = {
	V1Router,
	v1Router: new V1Router(express.Router(), routes).apiRouter
}