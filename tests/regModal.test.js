const mongoose =require('mongoose')
const Register = require('../models/registrationModel')

//Test suite
//describe has two args; the string details and the cbf which wraps
describe('registrationModelTest', ()=>{
    //Before doing anything, go to the db and delete all its conetents
    beforeAll(async()=>{
        try{
            await mongoose.connect('mongodb://localhost:27017/test-db', { useNewUrlParser:true})
            await Register.deleteMany({})
        }catch(err){
            console.log('Database error' + err)
        }
    })
    //Test setup
    //The function that handles the real test 
    test('It shoud be able to save', async()=>{
        //Create an instance of the modal
        const register = new Register({'username': 'jerome'});
        await register.save()

        const items =await Register.find({}) 
        //Assertion     
        expect(items.length).toBe(1)
    })

    //test tear down: some finishing work that needs to happen after the tests ran
    //This command clears the database
  afterEach(async () => {
    try {
        await Register.deleteMany({})
    } catch (err) {
        console.log("database error " + err)
    }
 }) 

})
