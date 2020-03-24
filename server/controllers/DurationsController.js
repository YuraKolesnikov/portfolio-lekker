const { durationsModel } = require('../models/DurationsModel')

class DurationsController {
	constructor(durationsModel) {
		this.durationsModel = durationsModel
	}

	async getDurations(req, res) {
		const durations = await durationsModel.getDurations()
		res.status(200).send(durations)
	}
}

module.exports = {
	DurationsController,
	durationsController: new DurationsController(durationsModel)
}