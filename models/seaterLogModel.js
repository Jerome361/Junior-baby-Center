const mongoose = require('mongoose')
//
const seaterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "please enter your first name"
    },
    email: String,
       
    password: {
        type: String,
        required: 'please enter password'
    },
    phone: Number,
   
    //cryptographic hashing
    

});

module.exports = mongoose.model('SeaterLog', seaterSchema)
