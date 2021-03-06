const express = require("express");
const SupervisorLog = require("../models/supervisorLog");
const BookingLog = require("../models/bookingModel");
var bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("loginSupervisor.html");
});

const authenticate = async (userEmail, userPassword) => {
  console.log(userPassword);
  if (userEmail) {
    const theUser = [];
    await SupervisorLog.findOne({ email: userEmail }, (error, response) => {
      if (response !== null) {
        theUser.push(response);
      }
    });
    if (theUser.length) {
      console.log(userPassword, theUser[0].createPassword);
      return await bcrypt.compareSync(userPassword, theUser[0].createPassword);
    } else {
      throw new Error("user is not found");
    }
  } else {
    throw new Error("No email provided");
  }
};
// submits a login page information
router.post("/", async (req, res) => {
  try {
    const user = await authenticate(req.body.email, req.body.password);
    if (user) {
      BookingLog.find().then(items => {
        res.render("supervisor.ejs", { bookingLogs: items });
      });
    } else {
      res.redirect("loginSupervisor.html");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
