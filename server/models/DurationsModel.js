const mongoose = require('mongoose'),
			Duration = require('../schemas/Duration')

const { mongoService } = require('../services/MongoService')

class DurationsModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getDurations() {
		const durations = await Duration.find({})
		return durations
	}
}

module.exports = {
	DurationsModel,
	durationsModel: new DurationsModel(mongoService)
}