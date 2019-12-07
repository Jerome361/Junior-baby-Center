const mongoose = require('mongoose')
//
const bookingSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: "please enter your first name"
    },
    phoneNumber:{
        type: Number,
        required: "please enter your first name"
    },
    email:{
        type: String,
        required: "please enter your first name"
    },
    address:{
        type: String,
        required: "please enter your first name"
    },
    occupation:{
        type: String,
        required: "please enter your first name"
    },
    childFullName:{
        type: String,
        required: "please enter your first name"
    },
    age:{
        type: Number,
        required: "please enter your first name"
    },   
    comment:{
        type: String,
        required: "please enter your first name"
    }
   
    //cryptographic hashing
    
});

module.exports = mongoose.model('BookingLog', bookingSchema)
