const express = require('express');
const Signup = require('../models/registrationModel');

const router = express.Router();

//Read the form and display it on the path /form
router.get('/', (req, res) => {
    res.render('index.html');
})




router.post('/', (req, res) => {
    console.log(req.body);
    //Creates an instance of the register model/docs for the data entered
    const admin = new Signup(req.body);
    admin.save()
        //promises
        //Querry the collection and pass the to a new form called list
        .then(
            Signup.find().then(
                item => {
                    res.render('login.html', { users: item });
                }
            )

        )
        .catch(err => {
            res.status(500).send('Unable to save to the database')
        })

})


//Return a specific path
router.get('/session', async(req,res)=>{
    if(req.session.user){
      try{
        const items = await Signup.find()
        res.render('welcomeAdmin.html', {users:items, currentUser: req.session.user});
      } catch(error){

      }
      }
      else{
          res.redirect('/auth/session')
      }
})



module.exports = router;