const mongoose = require('mongoose')
//
const customerSchema = new mongoose.Schema({
    phoneNumber:{
        type: Number,
    
    },
    fullName:{
        type: String,
    
    },
    email:{
        type: String,
    
    },
    address:{
        type: String,
    
    },
    occupation:{
        type: String,
    
    },
});

module.exports = mongoose.model('RegisterCustomer', customerSchema)
