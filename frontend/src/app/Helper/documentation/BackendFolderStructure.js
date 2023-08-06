import React from 'react';

const BackendFolderStructure = () => {
  return (

    <div className='flex justify-between'>


<div className="container mx-auto py-10 px-4">
<div className="frontend-structure">
      <ul className="backend-structure">
        <li>
          <span className="folder">src</span>
          <ul className="backend-structure">
            <li>
              <span className="folder">(components)</span>
              <ul className="backend-structure">
                <li>
                  <span className="folder">app</span>
                  <ul className="backend-structure">
                    <li>
                      <span className="folder">[id]</span>
                      <ul className="backend-structure">
                        <li><span className="file">page.tsx</span></li>
                        <li><span className="file">reactFlow.tsx</span></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </li>
            <li>
              <span className="folder">pages</span>
              <ul className="backend-structure">
                <li><span className="file">index.tsx</span></li>
                {/* Add more files as needed */}
              </ul>
            </li>
            <li><span className="file">_app.tsx</span></li>
            <li><span className="file">_document.tsx</span></li>
            {/* Add more files as needed */}
          </ul>
        </li>
        <li>
          <span className="folder">public</span>
          <ul className="backend-structure">
            <li>
              <span className="folder">static</span>
              <ul className="backend-structure">
                <li>
                  <span className="folder">avatar</span>
                  <ul className="backend-structure">
                    {/* Add files if any */}
                  </ul>
                </li>
                {/* Add more subfolders and files as needed */}
              </ul>
            </li>
            <li>
              <span className="folder">yaml</span>
              <ul className="backend-structure">
                {/* Add files if any */}
              </ul>
            </li>
            {/* Add more subfolders and files as needed */}
          </ul>
        </li>
        <li><span className="file">.env</span></li>
        <li><span className="file">next.config.js</span></li>
        {/* Add more files as needed */}
      </ul>
    </div>
</div>




   
    <div className="container mx-auto py-10 px-4">


      <h1 className="text-3xl font-bold mb-6">Backend Folder Structure</h1>

      {/* Controllers */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">controllers</h2>
        <ul className="list-disc ml-8">
          <li>shareController.js</li>
          <li>userController.js</li>
          <li>yamlController.js</li>
        </ul>
      </div>

      {/* Middleware */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">middleware</h2>
        <ul className="list-disc ml-8">
          <li>auth.js</li>
        </ul>
      </div>

      {/* node_modules */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">node_modules</h2>
      </div>

      {/* public */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">public</h2>
        <ul className="list-disc ml-8">
          <li>avatar folder</li>
          <li>yaml folder</li>
        </ul>
      </div>

      {/* routes */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">routes</h2>
        <ul className="list-disc ml-8">
          <li>userRoute.js</li>
          <li>shareRoute.js</li>
          <li>yamlRoute.js</li>
        </ul>
      </div>

      {/* index.js */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">index.js</h2>
      </div>

      {/* .env */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">.env</h2>
      </div>

      {/* Models */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold">Models</h2>
        <ul className="list-disc ml-8">
          <li>shareModel.js</li>
          <li>userModel.js</li>
          <li>yamlModel.js</li>
        </ul>
      </div>
    </div>


    </div>
  );
};

export default BackendFolderStructure;
