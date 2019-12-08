const express = require("express");
const AssignmentModel = require("../models/assignments");
const router = express.Router();

router.post("/", async (req, res) => {
  const myData = new AssignmentModel(req.body);
  myData
    .save()
    .then(item => {
      AssignmentModel.find().then(items => {
        res.render("supervisor.html", { assignments: items });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
