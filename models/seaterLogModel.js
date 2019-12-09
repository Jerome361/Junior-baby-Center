const mongoose = require("mongoose");
//
const seaterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "please enter your first name"
  },
  email: String,
  address: String,
  password: {
    type: String,
    required: "please enter password"
  },
  nationalId: {
    type: String,
    required: "please enter national Id number"
  },
  empId: {
    type: String,
    required: "please enter employee Id number"
  },
  phoneNumber: {
    type: String,
    required: "please enter phone number"
  },
  gender: {
    type: String,
    required: "please choose gender"
  },
  nextOfKeenName: {
    type: String,
    required: "please enter next of keen name"
  },
  nextOfKeenAddress: {
    type: String,
    required: "please enter next of keen address"
  },
  nextOfKeenPhone: {
    type: String,
    required: "please enter next of keen phone number"
  }
});

module.exports = mongoose.model("SeaterLog", seaterSchema);
