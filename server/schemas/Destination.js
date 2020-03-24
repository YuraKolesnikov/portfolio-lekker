const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const DestinationSchema = new Schema({
	country: String,
	caption: String,
	img_path: String,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('destinations', DestinationSchema)