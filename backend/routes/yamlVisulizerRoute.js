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

const upload = multer({storage: storage});
const yaml_controller = require('../controllers/yamlController');

// File Upload Route '/api/file/upload/' required data = {user, file, header['Authorization']/token}
yaml_visulizer_route.post('/upload', auth, upload.single('file'), yaml_controller.new_project);
// yaml_visulizer_route.post('/demo_upload', upload.single('file'), yaml_controller.file_upload);


// Get Project By ID
yaml_visulizer_route.get('/projects', auth, yaml_controller.get_project);

// Delete Project BY ID
yaml_visulizer_route.put("/delete", auth, yaml_controller.delete_project)


// 
yaml_visulizer_route.get('/project_by_id', auth, yaml_controller.get_project_by_id);


yaml_visulizer_route.put("/update_project_name", auth, yaml_controller.updateTitle)


yaml_visulizer_route.get("/share", yaml_controller.get_project_by_view_id)

yaml_visulizer_route.get('/download', (req, res, next) => {
    try {
      const file = path.join(__dirname, '..',`/public/yaml/` + (req.body.filename || req.query.filename));
      res.download(file);
    } catch (err) {
      console.log(err);
    }
})
module.exports = yaml_visulizer_route
