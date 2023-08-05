import HomePage from '@/app/(components)/Navbar/HomePage'
import React from 'react'

function page() {
  return (
    <div>
       <HomePage/>
      <div className="max-w-2xl mx-auto py-8">
  <h2 className="text-2xl font-bold mb-4">Step 1: Login or Register</h2>
  <p className="text-gray-600 mb-6">
    To use the YAML visualizer, first, the user needs to either log in or register on the platform. If the user already has an account, they can log in using their credentials. Otherwise, they can register by providing the required information.
  </p>

  <h2 className="text-2xl font-bold mb-4">Step 2: Drag and Drop YAML File</h2>
  <p className="text-gray-600 mb-6">
    Once the user is logged in or registered, they will be directed to the main dashboard. In the dashboard, there will be an area where the user can drag and drop their YAML file. Alternatively, there will be an option to browse and select the YAML file from their local storage.
  </p>

  <h2 className="text-2xl font-bold mb-4">Step 3: Visualizer</h2>
  <p className="text-gray-600 mb-6">
    After uploading the YAML file, the user will be redirected to the YAML visualizer page. In this visualizer, the hierarchical representation of the YAML file will be displayed. The visualizer will show the nested structure of the YAML data in a user-friendly manner.
  </p>

  <h2 className="text-2xl font-bold mb-4">Step 4: Interact with Visualizer</h2>
  <p className="text-gray-600 mb-6">
    The user can interact with the visualizer to explore the hierarchical representation of their YAML data. They can expand/collapse nodes to view nested data, zoom in/out to adjust the view, and pan the canvas to navigate through the visual.
  </p>

  <h2 className="text-2xl font-bold mb-4">Step 5: Export and Share</h2>
  <p className="text-gray-600 mb-6">
    To export the hierarchical visualization, the user can click on the action button in the visualizer. This action button will present options to export the visualization as PNG, PDF, or to share a link to the visualization with others. If the user chooses to export as PNG or PDF, the visualizer will generate the respective file format and provide a download link. If the user chooses to share a link, the visualizer will generate a unique URL that can be shared with others. This link will allow others to view the same YAML visualization.
  </p>

  <h2 className="text-2xl font-bold mb-4">Demo Login Code (For Testing Purpose)</h2>
  <p className="text-gray-600 mb-6">
    For demo and testing purposes, the platform will provide a login code or token that users can use without the need to register. This demo login code will grant temporary access to the visualizer, allowing users to experience the platform without creating an account.
  </p>
</div>

    </div>
  )
}

export default page