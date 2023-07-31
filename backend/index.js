const express = require('express');
var cors = require('cors');
const moogose = require('mongoose');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

// Mongo Connections
// User Routings

try{
    const connect = moogose.connect(`mongodb+srv://mayur:mayur--31@cluster0.v9x6kcw.mongodb.net/yaml-`)
    if (connect){
        app.listen(port, ()=> console.log(`Connected to port: ${port}`));
    }else{
        console.log("Some error Occured While Connecting")
    }

}catch(error){
    console.log('500, Internal Error')
}




