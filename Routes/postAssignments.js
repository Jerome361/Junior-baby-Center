const express = require("express");
const AssignmentModel = require("../models/assignments");
const BookingLog = require("../models/bookingModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const myData = new AssignmentModel(req.body);
  myData
    .save()
    .then(item => {
      BookingLog.find().then(items => {
        res.render("supervisor.ejs", { bookingLogs: items });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
