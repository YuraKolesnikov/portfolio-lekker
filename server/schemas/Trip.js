const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const TripSchema = new Schema({
	title: String,
	country: String,
	higlights: Array,
	caption: String,
	trip_id: mongoose.Schema.Types.ObjectId,
	img_path: String,
	duration: Number,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('trips', TripSchema)