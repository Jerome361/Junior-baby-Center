const express = require("express");
const bcrypt =require('bcryptjs')
const SupervisorLog = require("../models/supervisorLog");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("regSupervisor.html");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
  const myData = new SupervisorLog(req.body);
  const password = myData.createPassword;
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);
  myData.createPassword = hashedPassword;

  myData
    .save()
    .then(item => {
      SupervisorLog.find().then(items => {
        console.log("Data Saved to Database Successfully");
        res.render("welcomeAdmin.html", { supervisorLogs: items });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
