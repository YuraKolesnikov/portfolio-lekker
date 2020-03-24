const { destinationsModel } = require('../models/DestinationsModel')

class DestinationsController {
	constructor(destinationsModel) {
		this.destinationsModel = destinationsModel
	}

	async getDestinationsShort(req, res) {
		const destinations = await destinationsModel.getDestinationsShort()
		res.status(200).send(destinations)
	}

	async getDestinations(req, res) {
		const destinations = await destinationsModel.getDestinations()
		res.status(200).send(destinations)
	}
}

module.exports = {
	DestinationsController,
	destinationsController: new DestinationsController(destinationsModel)
}