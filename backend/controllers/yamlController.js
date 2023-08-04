const YAML = require('../Models/yamlModel')
const { v4: uuidv4 } = require('uuid');
const yaml = require('js-yaml');
const fs = require('fs');

const generate_unique_key = async () => {
    return uuidv4();
}


let nextId = 1;
function generateUniqueId() {
  return nextId++;
}


function addParentNodeIds(node, parentId = null) {
  node.id = generateUniqueId();
  node.parent_node_id = parentId;

  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      addParentNodeIds(child, node.id);
    }
  }
}
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
            data: { label: node.name },
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

    generateNodesAndEdges(jsonData);
    console.log('\nNodes Array:');
    console.log(initialNodes);
    
    // Print the edges array
    console.log('\nEdges Array:');
    console.log(initialEdges);

    return {nodes: initialNodes,edges: initialEdges}
}
const new_project = async (req, res) => {
    try {
        const user = req.body.user || 'Undefined';
        const filename = req.file.filename
   
        var route = req.file.path;
        var ne = CreateNodesandEdges(route);
        console.log(ne)
        const fileUpload = new YAML({
            user: user,
            filename: filename,
            unique_key: await generate_unique_key(),
            nodes: ne.nodes,
            edges: ne.edges
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
module.exports = { new_project }