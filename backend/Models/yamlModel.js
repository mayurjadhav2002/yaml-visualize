const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
   user:{
    type: String,
    require: true
   },
   filename:{
    type: String,
    require: true
   }
}, { timestamps: true });



module.exports = mongoose.model('File', FileSchema);;