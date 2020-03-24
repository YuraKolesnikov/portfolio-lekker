const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const DurationSchema = new Schema({
	id: String,
	title: String,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('durations', DurationSchema)