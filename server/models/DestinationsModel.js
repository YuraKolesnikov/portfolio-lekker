const mongoose = require('mongoose'),
			Destination = require('../schemas/Destination'),
			DestinationShort = require('../schemas/DestinationShort')

const { mongoService } = require('../services/MongoService')

class DestinationsModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getDestinations() {
		const destinations = await Destination.find({})
		return destinations
	}

	async getDestinationsShort() {
		const destinations = await DestinationShort.find({})
		return destinations
	}
}

module.exports = {
	DestinationsModel,
	destinationsModel: new DestinationsModel(mongoService)
}