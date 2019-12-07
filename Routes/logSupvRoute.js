const express = require('express');
const Signup = require('../models/supervisorLog');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('loginSupervisor.html')
});


// submits a login page information
router.post('/', async (req, res) => {
    try {
        const user = await SupervisorLog.authenticate(req.body.email, req.body.createPassword);
        // res.send("hey " + user.firstname + " " + user.lastname)

        req.session.user = user

        res.render('supervisor.html')

    } catch (error) {

        console.log(error);

        res.send("Login Failed")
        // res.redirect('register')
    }
})

module.exports = router 