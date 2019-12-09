const express = require("express");
const SeaterLog = require("../models/seaterLogModel");
const BookingLogs = require("../models/bookingModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const regSeater = new SeaterLog(req.body);
  regSeater
    .save()
    .then(
      BookingLogs.find().then(items => {
        res.render("supervisor.ejs", { bookingLogs: items });
      })
    )
    .catch(err => {
      res.status(500).send("Unable to save to the database");
    });
});

module.exports = router;
