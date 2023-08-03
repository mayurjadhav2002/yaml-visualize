const YAML = require('../Models/yamlModel')
const { v4: uuidv4} = require('uuid');
const generate_unique_key = async() =>{
    return uuidv4();
}
const file_upload = async(req,res)=>{
    try{
        const user = req.body.user || 'Undefined';
        const filename = req.file.filename;
        const fileUpload = new YAML({
            user: user,
            filename: filename,
            unique_key: await generate_unique_key()
        });
        const upload = await fileUpload.save()
        if(upload){
            res.status(200).send({success: true, message:"File Uploaded", res: fileUpload});
        }else{
            res.status(400).send({succss: false, message:"Some error Occured"})
        }
    }catch(error){
        res.status(500).send({success: false, message: "Internal Error Occured", error: error})
    }
}
module.exports = {file_upload}