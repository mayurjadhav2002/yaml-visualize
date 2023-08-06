import Nav from '@/app/(components)/landing/Nav'
import React from 'react'
import ProjectDocumentation from './ProjectDocumentation'
import BackendFolderStructure from './BackendFolderStructure';
function page() {
  return (
    <div>
       <Nav/>
       <div className='w-3/4 py-2 mx-auto overflow-x-visible '>
       <ProjectDocumentation/>
       <hr/>

       </div>
    </div>
  )
}

export default page