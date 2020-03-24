const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const TripSchema = new Schema({
	title: String,
	rating: Number,
	overview: Object,
	map_url: String,
	locations: Array,
	description: String,
	trip_id: Number,
	img_path: String,
	itinerary: Array,
	accomodations: [
		{ id: Number, rating: Number, title: String, description: String, img_path: String }
	],
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('trips-detailed', TripSchema)