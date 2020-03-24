const mongoose = require('mongoose'),
			Trip = require('../schemas/Trip'),
			TripDetailed = require('../schemas/TripDetailed')

const { mongoService } = require('../services/MongoService')

class TripsModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getTrips() {
		const trips = await Trip.find({})
		return trips
	}

	async getSingleTrip() {
		const trip = await TripDetailed.find({})
		return trip
	}
}

module.exports = {
	TripsModel,
	tripsModel: new TripsModel(mongoService)
}