const { bestSellersModel } = require('../models/BestSellersModel')

class BestSellersController {
	constructor(bestSellersModel) {
		this.bestSellersModel = bestSellersModel
	}

	async getBestSellers(req, res) {
		const durations = await bestSellersModel.getBestSellers()
		res.status(200).send(durations)
	}
}

module.exports = {
	BestSellersController,
	bestSellersController: new BestSellersController(bestSellersModel)
}