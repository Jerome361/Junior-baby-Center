const express = require('express');
const bookings = require('../models/bookingModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('booking.html')
});

router.post('/', (req, res) => {
    console.log(req.body);
    //Creates an instance of the register model/docs for the data entered
    const regBookings = new BookingLog(req.body);
    regBookings.save()
        //promises
        //Querry the collection and pass the to a new form called list
        .then(
            BookingLog.find().then(
                item => {
                    res.render('index.html', { users: item });
                }
            )

        )
        .catch(err => {
            res.status(500).send('Unable to save to the database')
        })

})

module.exports = router 