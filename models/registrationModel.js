const bcrypt =require('bcryptjs')
const mongoose = require('mongoose')
//Creating the schema which is the format/structure of data in the db
//Schema is resposnsible for how the post looks
//we create an object using {}
const registerSchema = new mongoose.Schema({
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

// registerSchema.add({ username:{type: String, unique:true, required: ""}})
//Hashing the password before saving it to db
registerSchema.pre('save', function(next){
    this.password= bcrypt.hashSync(this.password, 10);
    next()
})

//authenticate input against database
registerSchema.statics.authenticate = async function (username, password) {
    const user = await this.findOne({ username: username })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcrypt.compare(password, user.password)
    console.log(match)
    if (match) {
        return user;
    }
}


//Modelling
//Reads and creates documents in the db
//Register is a name
// const Register = mongoose.model('Register', registerSchema)
module.exports = mongoose.model('Signup', registerSchema)


