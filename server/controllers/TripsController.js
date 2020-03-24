const { tripsModel } = require('../models/TripsModel')

const ranges = {
	1: { min: 1, max: 5 },
	2: { min: 6, max: 9 },
	3: { min: 10, max: 14 },
	4: { min: 14, max: 30 }
}

class TripsController {
	constructor(tripsModel) {
		this.tripsModel = tripsModel
	}

	async getTrips(req, res) {
		const { duration, country } = req.query
		const trips = await tripsModel.getTrips({ range: ranges[duration], country })
		res.status(200).send(trips)
	}

	async getSingleTrip(req, res) {
		const { id } = req.params
		const trip = await tripsModel.getSingleTrip(id)
		res.status(200).send(trip)
	}
}

module.exports = {
	TripsController,
	tripsController: new TripsController(tripsModel)
}