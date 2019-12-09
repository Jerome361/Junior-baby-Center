const express = require("express");
const AdminLog = require("../models/superAdminModel");
var bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("loginSupervisor.html");
});

const authenticate = async (adminEmail, adminPassword) => {
    console.log(adminPassword, adminEmail);
    if (adminEmail) {
        const theUser = [];
        await AdminLog.findOne({ email: adminEmail }, (error, response) => {
            if (response !== null) {
                theUser.push(response);
            }
        });
        if (theUser.length) {
            console.log(adminPassword, theUser[0].password);
            return await bcrypt.compareSync(adminPassword, theUser[0].password);
        } else {
            throw new Error("Admin is not found");
        }
    } else {
        throw new Error("No email provided");
    }
};
// submits a login page information
router.post("/", async (req, res) => {
    try {
        const user = await authenticate(req.body.email, req.body.password);
        if (user) {
            res.render("welcomeAdmin.html");
        } else {
            res.redirect("loginAdmin.html");
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
