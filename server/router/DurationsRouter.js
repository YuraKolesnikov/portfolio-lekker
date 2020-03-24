const express = require('express')

const { durationsController } = require('../controllers/DurationsController')

class DurationsRouter {
	constructor(router, durationsController) {
		this.router = router
    this.durationsController = durationsController
    this.setupRouter()
	}

	get durationsRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
		.get(this.durationsController.getDurations.bind(this.durationsController))
	}
}

module.exports = {
	DurationsRouter,
	durationsRouter: new DurationsRouter(express.Router(), durationsController).durationsRouter
}