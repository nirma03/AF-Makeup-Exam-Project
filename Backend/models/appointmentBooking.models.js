const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//User Model
const appointmentBookingSchema = new Schema(
    {
        name:{ type: String, required: true, trim: true},
        email: { type: String, required: true, unique: true, trim: true },
        contact: { type: String, required: true, trim: true },
        message:{type: String, required: true, trim: true},
    },
    {
        timestamps: true,
    }
);

const AppointmentBooking = mongoose.model("AppointmentBooking", appointmentBookingSchema);

//Export User
module.exports = AppointmentBooking;