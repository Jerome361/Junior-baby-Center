const express = require("express");
const RegisterCustomer = require("../models/registerCustomerModel");
const BookingLog = require("../models/bookingModel");
const router = express.Router();

const getAllSeaters = async () => {
  const response = await RegisterCustomer.find();
  return response;
};

const getAllAppointments = async () => {
  const response = await BookingLog.find();
  return response;
};

//Route for submitting information form the registration form
router.get("/", async (req, res) => {
  const allSeaters = await getAllSeaters();
  const allKids = await getAllAppointments();
  console.log(allKids);
  res.render("assign.ejs", { seaters: allSeaters, kids: allKids });
});

module.exports = router;
