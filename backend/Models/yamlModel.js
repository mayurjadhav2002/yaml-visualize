const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
   user:{
    type: String,
    require: true
   },
   // YAML file 
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
   },
   // YAML to JSON converter
   yaml_to_json:{
      type: String,
   },
   nodes:{
      type: Object,
   },
   edges:{
      type: Object
   },
   last_update:{
      type: Date,
   },
   isDeleted: {
      type: Boolean,
      default: 0
   }

}, { timestamps: true });



module.exports = mongoose.model('File', FileSchema);;