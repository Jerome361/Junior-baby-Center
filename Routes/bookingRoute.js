const express = require("express");
const RegisterCustomer = require("../models/registerCustomerModel")
const BookingLog = require("../models/bookingModel");
const router = express.Router();

const customerIsRegistered = async (customerNumber) => {
  if (customerNumber) {
    const phone = [];
    await RegisterCustomer.findOne({ phoneNumber: customerNumber }, (error, response) => {
      if (response !== null) {
        phone.push(response);
      }
    });
    console.log(phone)
    if (phone.length) {
      return true;
    } else {
      return false;
    }

  } else {
    throw new Error('The customer phone number is missing')
  }
}


//Route for submitting information form the registration form
router.post("/", async (req, res) => {
  const myData = new BookingLog(req.body);
  console.log(myData.phoneNumber, "fghyfrerthgedrt");
  const found = await customerIsRegistered(myData.phoneNumber);
  console.log(found, 'found value')
  if (found) {
    myData
      .save()
      .then(item => {
        BookingLog.find().then(items => {
          res.render("supervisor.ejs", { bookingLogs: items });
        });
      })
      .catch(err => {
        //   console.log(err);
        res.status(400).send("unable to save to database");
      });
  } else {
    res.render("registerCustomer.html")
  }

});

module.exports = router;
