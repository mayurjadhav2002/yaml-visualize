const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT;
const userRoutes = require('./routes/userRoute')
const yamlRoutes = require('./routes/yamlVisulizerRoute')
const app = express();
app.use(cors());
app.use('/static', express.static(__dirname + '/public'));

// Mongo Connections
mongoose.connect(`${process.env.MONGO_URL}`)

mongoose.connection.on('connected', function () {
    console.log('Connected to Database');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ');
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});




// App Routes
app.use('/api', userRoutes)

// File Upload Routes
app.use('/api/file', yamlRoutes)


app.listen(port, () => console.log(`Connected to port: ${port}`));



