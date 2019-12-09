const express = require("express");
const bcrypt = require('bcryptjs')
const AdminLog = require("../models/superAdminModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("superAdmin.html");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
    const myData = new AdminLog(req.body);
    console.log(myData)
    const password = myData.password;
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);
    myData.password = hashedPassword;

    myData
        .save()
        .then(item => {
            AdminLog.find().then(items => {
                console.log("Admin Saved to Database Successfully");
                res.send('Boom!! You successfully created an admin')
                
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;
