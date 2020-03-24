const express = require('express')

const { destinationsController } = require('../controllers/DestinationsController')

class DestinationsRouter {
	constructor(router, destinationsController) {
		this.router = router
    this.destinationsController = destinationsController
    this.setupRouter()
	}

	get destinationsRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
		.get(this.destinationsController.getDestinations.bind(this.destinationsController))

		this.router.route('/short')
		.get(this.destinationsController.getDestinationsShort.bind(this.destinationsController))
	}
}

module.exports = {
	DestinationsRouter,
	destinationsRouter: new DestinationsRouter(express.Router(), destinationsController).destinationsRouter
}