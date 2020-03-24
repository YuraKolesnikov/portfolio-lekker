const express = require('express')

const { bestSellersController } = require('../controllers/BestSellersController')

class BestSellersRouter {
	constructor(router, bestSellersController) {
		this.router = router
    this.bestSellersController = bestSellersController
    this.setupRouter()
	}

	get bestSellersRouter() {
		return this.router
	}

	setupRouter() {
		this.router.route('/')
		.get(this.bestSellersController.getBestSellers.bind(this.bestSellersController))
	}
}

module.exports = {
	BestSellersRouter,
	bestSellersRouter: new BestSellersRouter(express.Router(), bestSellersController).bestSellersRouter
}