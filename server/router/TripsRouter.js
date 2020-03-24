const express = require('express')

const { tripsController } = require('../controllers/TripsController')

class TripsRouter {
	constructor(router, tripsController) {
		this.router = router
    this.tripsController = tripsController
    this.setupRouter()
	}

	get tripsRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
		.get(this.tripsController.getTrips.bind(this.tripsController))

		this.router.route('/:id')
		.get(this.tripsController.getSingleTrip.bind(this.tripsController))
	}
}

module.exports = {
	TripsRouter,
	tripsRouter: new TripsRouter(express.Router(), tripsController).tripsRouter
}