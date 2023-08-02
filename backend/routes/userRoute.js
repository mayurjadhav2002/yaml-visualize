const express = require('express');
const user_route = express()
const bodyParser = require('body-parser');
const user_controller = require('../controllers/userController');

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

user_route.post('/register', user_controller.register_new_user);
user_route.post('/login', user_controller.signin)

module.exports = user_route