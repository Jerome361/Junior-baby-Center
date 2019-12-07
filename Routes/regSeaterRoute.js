const express = require('express');
const SeaterLog = require('../models/seaterLogModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('regSeater.html')
});


// submits a login page information
router.post('/', async (req, res) => {

    const regSeater = new SeaterLog(req.body);
    regSeater.save()
        //promises
        //Querry the collection and pass the to a new form called list
        .then(
            SeaterLog.find().then(
                item => {
                    res.render('welcomeAdmin.html', { users: item });
                }
            )

        )
        .catch(err => {
            res.status(500).send('Unable to save to the database')
        })

})



module.exports = router 