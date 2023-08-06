const express = require('express');
const yaml_visulizer_route = express()
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
yaml_visulizer_route.use(express.static('public'));
yaml_visulizer_route.use(bodyParser.json());
yaml_visulizer_route.use(bodyParser.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/yaml'), function (e, s) {
            if (e) throw e;
        })
    },
    filename: function (req, file, cb) {
        const name = 'yaml-visualizer-' + Date.now() + '-' + file.originalname;
        cb(null, name, function (error1, success1) {
            if (error1) throw error1;
        })
    }
});

// Initializing Uploader
const upload = multer({storage: storage});
// Controller YAML 
const yaml_controller = require('../controllers/yamlController');



// File Upload Route '/api/file/upload/' required data = {user, file, header['Authorization']/token}
yaml_visulizer_route.post('/upload', auth, upload.single('file'), yaml_controller.new_project);

// Get Project By ID, need user_id in query parameter
yaml_visulizer_route.get('/projects', auth, yaml_controller.get_project);

// Delete Project BY ID. need unique key of project in either query or body of request
yaml_visulizer_route.put("/delete", auth, yaml_controller.delete_project)

// Get particular project.  need unique key of project in  query
yaml_visulizer_route.get('/project_by_id', auth, yaml_controller.get_project_by_id);

// Updating Project title. need to pass unique key in Project body or query of project
yaml_visulizer_route.put("/update_project_name", auth, yaml_controller.updateTitle)

// getting original link of the project, need unique_key in query parameter
yaml_visulizer_route.get("/share", yaml_controller.get_project_by_view_id)

// Download route to download the file
yaml_visulizer_route.get('/download', (req, res, next) => {
    try {
      
      try{
        // if file not exists
        const file = path.join(__dirname, '..',`/public/yaml/` + (req.body.filename || req.query.filename));
        res.download(file);
      }catch(error){
        console.log(error)
      }finally{
        res.send({msg:"File not exists"})
      }
     
    } catch (err) {
      console.log(err);
    }
})
module.exports = yaml_visulizer_route
