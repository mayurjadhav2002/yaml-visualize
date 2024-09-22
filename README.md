# YAML Visualizer - Documentation
The YAML Visualizer is a web application that allows users to upload YAML files and visualize their hierarchical structure using ReactFlow. It provides an interactive mind map interface and supports exporting visualizations as PNG images. The backend handles user authentication and stores files on AWS S3 for data redundancy. 



## Demonstration Video

https://github.com/mayurjadhav2002/yaml-visualize/assets/63432459/25ad4543-ac53-4bb3-b606-d6b505a82ccf



## Run Locally

1. Clone the repository from


```bash
  git clone https://github.com/mayurjadhav2002/yaml-visualize
```

2. Open a terminal and navigate to the "backend" directory & Run "npm install" to install the backend dependencies

```bash
  cd backend
  npm install
```
3. Return to the root directory and navigate to the "frontend" directory, Run "npm install"  to install the frontend dependencies
```bash
  cd frontend
  npm install
```

6. Create a `.env` file in the `backend` directory and add the following variables:

```bash
PORT=3080
MONGO_URL=mongo_url
AWS_ACCESS_KEY_ID=Aws access key
AWS_SECRET_ACCESS_KEY=secret key
AWS_BUCKET_NAME=bucket name
```

7. Create a `.env` file in the `frontend` directory and add the following variables:

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:3080
NEXT_PUBLIC_IMAGE_URL=http://localhost:3080/static/avatar
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
8. Starting the Project && go to root directory and run following commands
   ```bash
   cd backend && nodemon index.js
   cd frontend && npm run dev

   ```


## Usage

Once the backend and frontend servers are running, you can access the YAML Visualizer application on [http://localhost:3000](http://localhost:3000).


## Tech Stack

**Client:** NextJS, Redux, TailwindCSS, Flowbite, ReactFlow, headlessui, react-icons, react-toastify

**Server:** Node, Express, mongoose, AWS s3, js-yaml, multer

**Other:** Axios, nodemon, dotenv, jwt, downloadJS, html2png, dagre, moment, react-dropzone-uploader


## How to Use?

**Prerequisite - YAML File**
- Each element should be represented as an object in the YAML file.
- Each element should have a unique "id" property, which aligns with its name.
- Each element object should have a "name" property, which holds the name of the element.
- If an element has child elements, they should be represented as an array of objects under the "children" property.
- The structure of the YAML file should be hierarchical, representing the parent-child relationships of elements.
- The root element should not contain a hyphen ("-") at the start, unlike other child elements, to distinguish it as the top-level element.

**Demo File**
[![yaml-file.png](https://i.postimg.cc/B6dNXdLF/yaml-file.png)](https://postimg.cc/dkjGfN9Q)

## Steps to Use

1. **Login or Register:** To use the YAML visualizer, first, the user needs to either log in or register on the platform. If the user already has an account, they can log in using their credentials. Otherwise, they can register by providing the required information.

2. **Drag and Drop YAML File:** Once the user is logged in or registered, they will be directed to the main dashboard. In the dashboard, there will be an area where the user can drag and drop their YAML file. Alternatively, there will be an option to browse and select the YAML file from their local storage.

3. **Visualizer:** After uploading the YAML file, the user will be redirected to the YAML visualizer page. In this visualizer, the hierarchical representation of the YAML file will be displayed. The visualizer will show the nested structure of the YAML data in a user-friendly manner.

4. **Interact with Visualizer:** The user can interact with the visualizer to explore the hierarchical representation of their YAML data. They can expand/collapse nodes to view nested data, zoom in/out to adjust the view, and pan the canvas to navigate through the visual.

5. **Export and Share:** To export the hierarchical visualization, the user can click on the action button in the visualizer. This action button will present options to export the visualization as PNG, PDF, or to share a link to the visualization with others. If the user chooses to export as PNG or PDF, the visualizer will generate the respective file format and provide a download link. If the user chooses to share a link, the visualizer will generate a unique URL that can be shared with others. This link will allow others to view the same YAML visualization.

**Demo Login Code (For Testing Purpose)**
For demo and testing purposes, the platform will provide a login code (given in the login page) that users can use without the need to register. This demo login code will grant temporary access to the visualizer, allowing users to experience the platform without creating an account.



## Features Implemented

**Backend**
- Backend developed using Node.js and MongoDB to handle user authentication and project data storage.
- YAML files are parsed and stored in the public folder of the backend server for easy access.
- Uploaded YAML files are also backed up on AWS S3 bucket for data redundancy and disaster recovery.
- YAML files are converted to JSON format to simplify data processing on the frontend.
- Extracted nodes and edges from the JSON object to optimize operations on the frontend side.

**Frontend**
- Frontend built using Next.js, React, and Tailwind CSS to create a user-friendly interface.
- Users can log in to access their projects and create new projects by uploading YAML files.
- The visual representation of YAML files is achieved using the ReactFlow library to create interactive mind map diagrams.
- YAML File Visualization using ReactFlow allows users to interactively view and understand the hierarchical structure of their YAML data. Users can collapse and expand nodes in the mind map to explore nested YAML data efficiently.

**User Authentication**
- Implemented user authentication to ensure that only authorized users can access and manage their projects.


## API Reference


#### Create new project

```http
  POST /api/file/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. |
| `file` | `file` | **Required**. |
| `Authorization` | `Header` | **Required**. |

#### Get all Projects Created by User

```http
  GET /api/file/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. (in query) |
| `Authorization` | `Header` | **Required**. |

#### Get project by particular ID

```http
  GET /api/file/project_by_id/?unique_key=${unique_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `unique_key`      | `string` | **Required**. Unique key of project |
| `Authorization` | `Header` | **Required**. |


#### Get project by particular ID (for other users viewing through share link)

```http
  GET /api/file/share/?unique_key=${unique_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `unique_key`      | `string` | **Required**. Unique key of project |

