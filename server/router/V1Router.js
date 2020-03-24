const express = require('express')

const { destinationsRouter } = require('./DestinationsRouter')
const { durationsRouter } = require('./DurationsRouter')
const { bestSellersRouter } = require('./BestSellersRouter')

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
  { url: '/destinations', router: destinationsRouter },
	{ url: '/durations', router: durationsRouter },
	{ url: '/best-sellers', router: bestSellersRouter }
]
module.exports = {
	V1Router,
	v1Router: new V1Router(express.Router(), routes).apiRouter
}