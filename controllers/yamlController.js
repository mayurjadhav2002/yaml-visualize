const YAML = require('../Models/yamlModel')
const file_upload = async(req,res)=>{
    try{
        const user = req.body.user;
        const filename = req.file.filename;
        const fileUpload = new YAML({
            user: user,
            filename: filename
        });
        const upload = await fileUpload.save()
        if(upload){
            res.status(200).send({success: true, message:"File Uploaded"});
        }else{
            res.status(400).send({succss: false, message:"Some error Occured"})
        }

    }catch(error){
        res.status(500).send({success: false, message: "Internal Error Occured"})
    }
}
module.exports = {file_upload}