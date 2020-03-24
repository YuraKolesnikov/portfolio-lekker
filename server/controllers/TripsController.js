const { tripsModel } = require('../models/TripsModel')

class TripsController {
	constructor(tripsModel) {
		this.tripsModel = tripsModel
	}

	async getTrips(req, res) {
		const trips = await tripsModel.getTrips()
		console.log(trips)
		res.status(200).send(trips)
	}

	async getSingleTrip(req, res) {
		console.log(req.params)
		const trip = await tripsModel.getSingleTrip()
		console.log(trip)
		res.status(200).send(trip)
	}
}

module.exports = {
	TripsController,
	tripsController: new TripsController(tripsModel)
}