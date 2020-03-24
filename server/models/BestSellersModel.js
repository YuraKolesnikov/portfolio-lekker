const mongoose = require('mongoose'),
			BestSeller = require('../schemas/BestSeller')

const { mongoService } = require('../services/MongoService')

class BestSellersModel {
	constructor(mongoService) {
		this.mongoService = mongoService
	}

	async getBestSellers() {
		const data = await BestSeller.find({})
		return data
	}
}

module.exports = {
	BestSellersModel,
	bestSellersModel: new BestSellersModel(mongoService)
}