const express = require('express');
const user_route = express()
const bodyParser = require('body-parser');
const user_controller = require('../controllers/userController');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));


// Hello world Route
user_route.get('/', (req,res)=>{
    res.send("hello World")
})

// Register Route. takes first_name, last_name, email, password in post request body
user_route.post('/register', user_controller.register_new_user);

// login route takes email and password in body request
user_route.post('/login', user_controller.signin)

module.exports = user_route