const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const TripDetailedSchema = new Schema({
	title: String,
	rating: Number,
	overview: Object,
	map_url: String,
	country: String,
	locations: [
		{ id: Number, coordinates: Object, title: String }
	],
	description: String,
	img_path: String,
	itinerary: Array,
	accomodations: [
		{ id: Number, rating: Number, title: String, description: String, img_path: String }
	],
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('detailed-trips', TripDetailedSchema)