const express = require("express");
const RegisterCustomer = require("../models/registerCustomerModel");
const BookingLog = require("../models/bookingModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("registerCustomer.html");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
  const myData = new RegisterCustomer(req.body);
  myData
    .save()
    .then(item => {
      BookingLog.find().then(items => {
        res.render("supervisor.ejs", { bookingLogs: items });
      });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
