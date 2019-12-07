const express = require('express');
const Signup = require('../models/registrationModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login')
});


// submits a login page information
router.post('/', async (req, res) => {
    try {
        const user = await Signup.authenticate(req.body.username, req.body.password);
        // res.send("hey " + user.firstname + " " + user.lastname)

        req.session.user = user

        res.render('welcomeAdmin.html')

    } catch (error) {

        console.log(error);

        res.send("Login Failed")
        // res.redirect('register')
    }
})

module.exports = router 