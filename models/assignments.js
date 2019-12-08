const mongoose = require("mongoose");
//
const assignmentSchema = new mongoose.Schema({
  seaterName: {
    type: String
  },
  childId: {
    type: String
  }
});

module.exports = mongoose.model("Assignments", assignmentSchema);
