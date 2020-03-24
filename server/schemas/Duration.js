const mongoose = require('mongoose'),
			Schema = mongoose.Schema

const DurationSchema = new Schema({
	id: Number,
	title: String,
	_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('durations', DurationSchema)