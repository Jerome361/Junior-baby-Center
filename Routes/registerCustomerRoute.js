const express = require("express");
const RegisterCustomer = require("../models/registerCustomerModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("registerCustomer.html");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
  const myData = new RegisterCustomer(req.body);
  console.log(myData)
  myData
    .save()
    .then(item => {
        RegisterCustomer.find().then(items => {
        // console.log("Data Saved to Database Successfully");
        res.render("supervisor.html", { registerCustomers: items });
      });
    })
    .catch(err => {
    //   console.log(err);
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
