const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const BestSellerSchema = new Schema({
	/* Will be used to search in trips */
	title: String,
	caption: String,
	trip_id: Number,
	img_path: String,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('best-sellers', BestSellerSchema)