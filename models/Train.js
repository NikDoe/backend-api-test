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
			required: true,
		},
	],
	rating: {
		type: Number,
	},
	vans: [
		{
			type: Number,
			required: true,
		},
	],
	vansTypes: [
		{
			type: String,
			default: 'Сидячий',
			required: true,
		},
	],
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

module.exports = mongoose.model('Train', trainSchema);
