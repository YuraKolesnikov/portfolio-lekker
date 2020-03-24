const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const DestinationShortSchema = new Schema({
	title: String,
	id: String,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('short-destinations', DestinationShortSchema)