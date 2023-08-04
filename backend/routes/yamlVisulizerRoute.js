const express = require('express');
const yaml_visulizer_route = express()
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
yaml_visulizer_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/yaml'), function (e, s) {
            if (e) throw e;
        })
    },
    filename: function (req, file, cb) {
        const name = 'yaml-visulizer' + Date.now() + '-' + file.originalname;
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


module.exports = yaml_visulizer_route
