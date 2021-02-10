const express = require('express');
const bookingRoutes = express.Router();
let Booking = require('../models/appointmentBooking.models');
const router = require("express").Router();


//add a booking message
bookingRoutes.route('/add').post(function (req,res) {
    let booking = new Booking(req.body);
    booking.save()
        .then(booking =>{
            res.status(200).json({'Message':'Message added successfully'});
        }).catch(err =>{
        res.status(400).send('Message was not added successfully');
    });
});

//Export Booking Route
module.exports = router;