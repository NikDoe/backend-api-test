const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bookingSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		from: {
			type: String,
			required: true,
		},
		to: {
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
		vanNumber: {
			type: Number,
			required: true,
		},
		vanType: {
			type: String,
			required: true,
		},
		seatNumber: {
			type: Number,
			required: true,
		},
		seatType: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

bookingSchema.plugin(AutoIncrement, {
	inc_field: 'ticket',
	id: 'ticketNums',
	start_seq: 1,
});

module.exports = mongoose.model('Booking', bookingSchema);
