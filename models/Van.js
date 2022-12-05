const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
	train: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Train',
	},
	vanNumber: {
		type: Number,
		required: true,
	},
	vanType: {
		type: String,
		required: true,
	},
	seats: [
		{
			seatNumber: Number,
			seatType: String,
			booked: {
				type: Boolean,
				default: false,
			},
		},
	],
});

module.exports = mongoose.model('Van', vanSchema);
