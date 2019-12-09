const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "please enter your email"
    },
    
    password: {
        type: String,
        required: 'please enter password'
    },
 });

module.exports = mongoose.model('AdminLog', adminSchema)
