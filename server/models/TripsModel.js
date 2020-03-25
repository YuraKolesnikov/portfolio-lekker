const mongoose = require('mongoose'),
			Trip = require('../schemas/Trip'),
			TripDetailed = require('../schemas/TripDetailed')

const { mongoService } = require('../services/MongoService')

class TripsModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getTrips({ range, country }) {
		const query = {}

		if (range && range.min && range.max) {
			query.duration = { $gte: range.min, $lte: range.max }
		}

		if (country) {
			query.country = country
		}

		return await Trip.find(query)
	}

	async getSingleTrip(id) {
		console.log('Getting single trip from database...')
		const trip = await TripDetailed.findById(id)
		return trip
	}
}

module.exports = {
	TripsModel,
	tripsModel: new TripsModel(mongoService)
}