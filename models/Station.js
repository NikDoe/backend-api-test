const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
	train: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Train',
	},
	stationName: {
		type: String,
		required: true,
	},
	departureTime: {
		type: String,
		required: true,
	},
	arrivalTime: {
		type: String,
		required: true,
	},
	wayTime: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Station', stationSchema);
