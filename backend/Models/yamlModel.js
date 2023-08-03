const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
   user:{
    type: String,
    require: true
   },
   filename:{
    type: String,
    require: true
   },
   unique_key: {
      type: String, 
      require:true
   },
   project_name:{
      type: String,
      default: "Untitled Document"
   }
}, { timestamps: true });



module.exports = mongoose.model('File', FileSchema);;