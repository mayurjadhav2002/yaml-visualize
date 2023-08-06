import Nav from '@/app/(components)/landing/Nav'
import React from 'react'

function page() {
  return (
    <div>
       <Nav/>
       
       <div className="max-w-2xl mx-auto  py-8">
<h1 className='text-3xl font-bold mt-4 text-center'>How to Use?</h1>
<h2 className="text-xl font-bold mt-4 mb-2">Prerequisite - YAML file</h2>
<p className="text-gray-600 mb-6">

<ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
  <li>Each element should be represented as an object in the YAML file.
</li>
<li>Each element should have a unique "id" property, which aligns with its name.
</li>
  <li>Each element object should have a "name" property, which holds the name of the element.
</li>
<li>If an element has child elements, they should be represented as an array of objects under the "children" property.</li>


  <li>The structure of the YAML file should be hierarchical, representing the parent-child relationships of elements.
</li>

<li><strong>The root element should not contain a hyphen ("-") at the start, unlike other child elements, to distinguish it as the top-level element.



</strong></li>
<li>Demo File</li>
  </ul>

  <img src={'/yamlfile.png'} className='mx-auto my-2' />


</p>

<hr />
       <h1 className="text-3xl font-bold mb-4 mt-4 text-center">Steps to Use</h1>
  <h2 className="text-xl font-bold mt-4 mb-2">Step 1: Login or Register</h2>
  <p className="text-gray-600 mb-6">
    To use the YAML visualizer, first, the user needs to either log in or register on the platform. If the user already has an account, they can log in using their credentials. Otherwise, they can register by providing the required information.
    <img src={'https://i.postimg.cc/KcJvXtwt/scrnli-8-5-2023-10-22-57-PM.png'} />
  </p>

  <h2 className="text-xl font-bold mt-4 mb-2">Step 2: Drag and Drop YAML File</h2>
  <p className="text-gray-600 mb-6">
    Once the user is logged in or registered, they will be directed to the main dashboard. In the dashboard, there will be an area where the user can drag and drop their YAML file. Alternatively, there will be an option to browse and select the YAML file from their local storage.
    <img src={'https://i.postimg.cc/nhsv9FBw/Screenshot-2023-08-05-222713.png'} />

  </p>

  <h2 className="text-xl font-bold mt-4 mb-2">Step 3: Visualizer</h2>
  <p className="text-gray-600 mb-6">
    After uploading the YAML file, the user will be redirected to the YAML visualizer page. In this visualizer, the hierarchical representation of the YAML file will be displayed. The visualizer will show the nested structure of the YAML data in a user-friendly manner.
    <img src={'https://i.postimg.cc/YSzjhZns/scrnli-8-5-2023-10-29-26-PM.png'} />

  </p>

  <h2 className="text-xl font-bold mt-4 mb-2">Step 4: Interact with Visualizer</h2>
  <p className="text-gray-600 mb-6">
    The user can interact with the visualizer to explore the hierarchical representation of their YAML data. They can expand/collapse nodes to view nested data, zoom in/out to adjust the view, and pan the canvas to navigate through the visual.
  </p>

  <h2 className="text-xl font-bold mt-4 mb-2">Step 5: Export and Share</h2>
  <p className="text-gray-600 mb-6">
    To export the hierarchical visualization, the user can click on the action button in the visualizer. This action button will present options to export the visualization as PNG, PDF, or to share a link to the visualization with others. If the user chooses to export as PNG or PDF, the visualizer will generate the respective file format and provide a download link. If the user chooses to share a link, the visualizer will generate a unique URL that can be shared with others. This link will allow others to view the same YAML visualization.
    <img src={'https://i.postimg.cc/y8BDs7nZ/Screenshot-2023-08-05-223101.png'} />

  </p>

  <h2 className="text-xl font-bold mt-4 mb-2">Demo Login Code (For Testing Purpose)</h2>
  <p className="text-gray-600 mb-6">
    For demo and testing purposes, the platform will provide a login code (given in login page) that users can use without the need to register. 
    This demo login code will grant temporary access to the visualizer, allowing users to experience the platform without creating an account.
  </p>


  <hr className='my-5'/>


      <h1 className="text-3xl font-bold mb-4 text-center">Features Implemented</h1>
      <h2  className="text-xl font-bold mt-4 mb-2">Backend</h2>
      <ul className="list-disc pl-6">
      <li>Backend developed using Node.js and MongoDB to handle user authentication and project data storage.</li>
      <li>YAML files are parsed and stored in the public folder of the backend server for easy access.</li>
      <li>Uploaded YAML files are also backed up on AWS S3 bucket for data redundancy and disaster recovery.</li>
      <li>YAML files are converted to JSON format to simplify data processing on the frontend.</li>
      <li>Extracted nodes and edges from the JSON object to optimize operations on the frontend side.</li>
    </ul>
    <h1  className="text-xl font-bold mt-4 mb-2">Frontend</h1>
    <ul className="list-disc pl-6">
      <li>Frontend built using Next.js, React, and Tailwind CSS to create a user-friendly interface.</li>
      <li>Users can log in to access their projects and create new projects by uploading YAML files.</li>
      <li>The visual representation of YAML files is achieved using the ReactFlow library to create interactive mind map diagrams.</li>
      <li>YAML File Visualization using ReactFlow allows users to interactively view and understand the hierarchical structure of their YAML data. Users can collapse and expand nodes in the mind map to explore nested YAML data efficiently.</li>

    </ul>

    <h1  className="text-xl font-bold mt-4 mb-2">User Authentication</h1>
    <ul className="list-disc pl-6">
      <li>Implemented user authentication to ensure that only authorized users can access and manage their projects.</li>
      <li>Users can log in using their credentials, and new users can register to create an account.</li>
    </ul>

    <h1  className="text-xl font-bold mt-4 mb-2">Cloud Storage Integration</h1>
    <ul className="list-disc pl-6">
      <li>Integrated with a cloud storage service, such as AWS S3, to store uploaded YAML files securely and efficiently.</li>
      <li>Storing files in the cloud ensures scalability and availability of user data.</li>
    </ul>

    <h1  className="text-xl font-bold mt-4 mb-2">Export and Sharing</h1>
    <ul className="list-disc pl-6">
      <li>Users can export the mind map diagram as an image (PNG) for easy sharing and inclusion in documents or presentations.</li>
      <li>A unique URL is generated for each mind map diagram, enabling users to share their visualizations with others.</li>
    </ul>


</div>    </div>
  )
}

export default page