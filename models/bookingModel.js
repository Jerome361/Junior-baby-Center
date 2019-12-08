const mongoose = require('mongoose')
//
const bookingSchema = new mongoose.Schema({
    fullName:{
        type: String,
    
    },
    // parentid:{
    //     type: String,
    
   
    // },
    phoneNumber:{
        type: String,
    
    },
    childFullName:{
        type: String,
    
    },
    age:{
        type: Number,
    
    },
    // gender:{
    //     type: String,
      
    // },  
    comment:{
        type: String,
    
    }
   
    //cryptographic hashing
    
});

module.exports = mongoose.model('BookingLog', bookingSchema)
