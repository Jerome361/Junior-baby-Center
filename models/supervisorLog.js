const mongoose = require('mongoose')
//
const supvSchema = new mongoose.Schema({
    fullName:{
        type: String,
        
    },
    
    ninNumber:{
        type: String,
        
    },
    eidNumber:{
        type: String,
        
    },
    email:{
        type: String,
        
    },
    phoneNumber:{
        type: String,
        
    },
    address:{
        type: String,
        
    },
    keenName:{
        type: String,
        
    },   
    keenPhone:{
        type: String,
        
    },
    createPassword:{
        type: String,
        
    }
   
    //cryptographic hashing
    

});

module.exports = mongoose.model('SupervisorLog', supvSchema)
