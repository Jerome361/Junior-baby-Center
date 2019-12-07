const express = require('express');
const SupervisorLog = require('../models/supervisorLog');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('regSupervisor.html')
});


// router.post('/', (req, res) => {
//     console.log(req.body);
//     //Creates an instance of the register model/docs for the data entered
//     const regSupv = new SupervisorLog(req.body);
//     regSupv.save()
//         //promises
//         //Querry the collection and pass the to a new form called list
//         .then(item =>{
//             SupervisorLog.find().then(

//                 items => {
//                     res.render('welcomeAdmin.html', {supervisorLogs: regSupv });
//                 }

//             )
//         }


//         )
//         .catch(err => {
//             res.status(500).send('Unable to save to the database')
//         })

// })


//Route for submitting information form the registration form
router.post('/', (req, res) => {
    const myData = new SupervisorLog(req.body)
    myData.save()
        .then(item => {
            SupervisorLog.find().then(
                items => {
                    console.log("Data Saved to Database Successfully");
                    res.render('welcomeAdmin.html', { supervisorLogs: items })
                })
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});

module.exports = router 