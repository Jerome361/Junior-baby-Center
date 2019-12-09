const express = require("express");
const BookingLog = require("../models/bookingModel");
const Assignment = require("../models/assignments");

const router = express.Router();

router.get("/", async (req, res) => {
  const allBookings = await BookingLog.find();
  const allAssigned = await Assignment.find();
  const allTheAssignedWithChildName = [];
  const theUnAssigned = [];
  allBookings &&
    allBookings.length &&
    allBookings.map(eachBooking => {
      allAssigned &&
        allAssigned.length &&
        allAssigned.map(eachAssignment => {
          const { _id } = eachBooking;
          if (_id.toString() !== eachAssignment.childId.toString()) {
            theUnAssigned.push(eachBooking);
          } else {
            const data = {
              seaterName: eachAssignment.seaterName,
              childName: eachBooking.childFullName
            };
            allTheAssignedWithChildName.push(data);
            console.log("Assigned already");
          }
        });
    });
  res.render("reports.ejs", {
    bookingLogsUnassigned: theUnAssigned,
    assigned: allTheAssignedWithChildName,
    bookingLogs: allBookings
  });
});

module.exports = router;
