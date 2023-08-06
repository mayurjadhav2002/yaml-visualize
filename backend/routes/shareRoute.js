const express = require('express');
const share_route = express()
const bodyParser = require('body-parser');
const share_controller = require('../controllers/shareController');

share_route.use(bodyParser.json());
share_route.use(bodyParser.urlencoded({extended:true}));


// share key generator takes {original_url} in post request body
share_route.post('/', share_controller.generator);

// fetching Original url, need to pass share_key in query parameter of url e.g. url?share_key=xxxx....
share_route.get('/url', share_controller.get_url);



module.exports = share_route