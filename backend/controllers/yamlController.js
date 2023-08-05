const YAML = require('../Models/yamlModel')
const { v4: uuidv4 } = require('uuid');
const yaml = require('js-yaml');
const fs = require('fs');

// aws
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
// Generate Unique_key to share with other users
const generate_unique_key = async () => {
    return uuidv4();
}


// Uploading and Converting the YAML file
// This program will convert the YAML file into 

// This function will assign new unique ID to each node
let nextId = 1;
function generateUniqueId() {
    return nextId++;
}

// This Function will add Parent node Id to child node
// eg.for creating edges such as source=4 destination=5
function addParentNodeIds(node, parentId = null) {
    node.id = generateUniqueId();
    // Assign parent ID, NULL if root node
    node.parent_node_id = parentId;
    if (node.children && node.children.length > 0) {
        for (const child of node.children) {
            addParentNodeIds(child, node.id);
        }
    }
}
// Creating the array of Nodes and Edges
function CreateNodesandEdges(file_path) {
    const fileData = fs.readFileSync(file_path, 'utf8');
    const jsonData = yaml.load(fileData)
    addParentNodeIds(jsonData);
    const initialNodes = [];
    const initialEdges = [];

    const position = { x: 0, y: 0 };

    function generateNodesAndEdges(node) {
        initialNodes.push({
            id: `${node.id}`,
            data: { label: node.name || node.label },
            position
        });

        if (node.children && node.children.length > 0) {
            for (const child of node.children) {
                initialEdges.push({
                    id: `${node.id}->${child.id}`,
                    source: `${node.id}`,
                    target: `${child.id}`,
                });
                generateNodesAndEdges(child);
            }
        }
    }
    // Recall the Function
    generateNodesAndEdges(jsonData);
    return { nodes: initialNodes, edges: initialEdges }
}


// Upload File to Aws
const uploadtoAWS = async (path, newFileName) => {
    console.log(path)
    const fileStream = fs.createReadStream(path)
    fileStream.on('error', (err) => {
        console.log('file error', err)
    })
    // Parameters of File
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: newFileName,
        Body: fileStream
    };
    s3.upload(params, (err, data) => {
        if (err) {
            console.log("Error Occured: ", err)
        }
        if (data) {
            console.log("File Uploaded", data.Location)
        }
        return data.Location
    })

}




// Creating a New Project
const new_project = async (req, res) => {
    try {
        const user = req.body.user;
        const filename = req.file.filename

        var route = req.file.path;
        var ne = CreateNodesandEdges(route);
        const aws = await uploadtoAWS(route, filename)

        const fileUpload = new YAML({
            user: user,
            filename: filename,
            unique_key: await generate_unique_key(),
            nodes: ne.nodes,
            edges: ne.edges,
            aws_url: aws
        });
        const upload = await fileUpload.save()
        if (upload) {
            res.status(200).send({ success: true, message: "File Uploaded", res: fileUpload });
        } else {
            res.status(400).send({ succss: false, message: "Some error Occured" })
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Error Occured", error: error })
    }
}


// This Controller will send all the projects created by that user
const get_project = async (req, res) => {
    try {
        const user = req.body.user || req.query.user;
        // const id = req.body.id;
        const project = await YAML.find({ user: user, isDeleted: false }).sort({ updatedAt: 'descending' });
        if (project) {

            res.status(200).send({ success: true, data: project })

        } else {
            res.status(200).send({ success: true, message: "No Project Found" })
        }
    } catch (error) {
        // Sending error message for testing purpose
        res.status(500).send({ success: false, message: "Internal Error Occured", error: error })

    }
}

// Delete the Project

const delete_project = async (req, res) => {
    try {
        const uniqueKey = req.body.unique_key || req.query.unique_key;
        console.log('Unique Key:', req.body.unique_key);

        const update = { isDeleted: true };
        const Project = await YAML.findOneAndUpdate({ unique_key: uniqueKey }, update, { new: true });

        console.log('Project:', Project);

        if (Project) {
            res.send({ success: true, msg: "Deleted", Project });
        } else {
            res.send({ msg: "No Project Found" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ success: false, message: "Internal Error Occurred", error: error });
    }
};




// Get particular Project to visualize
const get_project_by_id = async (req, res) => {
    try {
        const unique = req.body.unique_key || req.query.unique_key;
        const update = { updatedAt: new Date() }
        const data = await YAML.findOneAndUpdate({ unique_key: unique }, update);
        if (data) {
            res.send({ data: data })
        } else {
            res.send({ msg: "Failed to send the data" })
        }
    } catch (error) {

    }
}

const get_project_by_view_id = async (req, res) => {
    try {
        const unique = req.body.unique_key || req.query.unique_key;
        const data = await YAML.findOne({unique_key: unique});
        if (data) {
            res.send({ data: data })
        } else {
            res.send({ msg: "Failed to send the data" })
        }
    } catch (error) {

    }
}



// Update the title of Project
const updateTitle = async (req, res) => {
    try {

        const unique = req.body.unique_key || req.query.unique_key;

        const Project = await YAML.findOneAndUpdate({ unique_key: unique }, { project_name: req.body.project_name || req.query.project_name })
        if (Project) {
            res.send({ msg: "Title Updated", project: Project })
        } else {
            res.send({ msg: "No Project Found" })
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Error Occured", error: error })

    }
}





module.exports = { new_project, get_project, delete_project, get_project_by_id, updateTitle, get_project_by_view_id }