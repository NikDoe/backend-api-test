const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
	trainNumber: {
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
	from: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	type: [
		{
			type: String,
		},
	],
	rating: {
		type: Number,
	},
	services: [
		{
			type: [Number],
		},
	],
	unavailableDates: [
		{
			type: [Date],
		},
	],
});

module.exports = mongoose.model('Plane', trainSchema);

//a = 4:59, b = 15:37, c =
