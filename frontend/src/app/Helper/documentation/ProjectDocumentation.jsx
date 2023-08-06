import React from 'react';

const ProjectDocumentation = () => {
  return (
    <div className="container mx-auto py-10 px-4 text-ellipsis">
      <h1 className="text-3xl font-bold mb-6">YAML Visualize Project Documentation</h1>

      <h2 className="text-xl font-semibold mt-6">Project Setup</h2>
      <ol className="list-decimal ml-8">
        <li>Clone the repository from <a href="https://github.com/mayurjadhav2002/yaml-visualize" target="_blank"
            className="text-blue-500 hover:underline">https://github.com/mayurjadhav2002/yaml-visualize</a></li>
        <li>Open a terminal and navigate to the "backend" directory</li>
        <li>Run "npm install" to install the backend dependencies</li>
        <li>Return to the root directory and navigate to the "frontend" directory</li>
        <li>Run "npm install" to install the frontend dependencies</li>
        <li>Create a .env file in the "backend" directory and add the following variables:
          <pre className="bg-black  text-white p-2 mt-2">
            PORT=3080 <br></br>
            MONGO_URL=mongo_url<br></br>
            AWS_ACCESS_KEY_ID=Aws access key<br></br>
            AWS_SECRET_ACCESS_KEY=secrete key<br></br>
            AWS_BUCKET_NAME=bucket name
          </pre>
        </li>
        <li>Open the .env file in the "frontend" directory and add the following variable:
          <pre className="bg-black  text-white p-2 mt-2">NEXT_PUBLIC_BACKEND_URL=http://localhost:3080<br></br>
NEXT_PUBLIC_IMAGE_URL=http://localhost:3080/static/avatar<br></br>
NEXT_PUBLIC_APP_URL=http://localhost:3000</pre>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-6">Starting the Project</h2>
      <ol className="list-decimal ml-8">
        <li>Go to the "backend" directory and run <pre className='bg-black p-2 text-white my-2'>nodemon index.js</pre></li>
        <li>Go to the "frontend" directory and run <pre className='bg-black p-2 text-white my-2'>npm run dev</pre></li>
      </ol>

      <h2 className="text-xl font-semibold mt-6">Usage</h2>
      <p>
        Once the backend and frontend servers are running, you can access the YAML Visualize application on
        <a href="http://localhost:3000" target="_blank" className="text-blue-500 mx-2 hover:underline">http://localhost:3000</a>.
      </p>
    </div>
  );
};

export default ProjectDocumentation;
