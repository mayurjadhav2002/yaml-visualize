'use client'
import React, {useEffect} from 'react'
import GetProjectForViewer from '../../../Axios/Requests/GetProjectForViewer'
import { ReactFlowFunction } from '../../app/[id]/reactFlow';

export default function Page({ params }: { params: { id: string } }) {
    const { project, loading, getData } = GetProjectForViewer("?unique_key=" + params.id);
    const data = {
      nodes: project?.nodes || [],
      edges: project?.edges || []
    }
    console.log(project)
    useEffect(() => {
      if (project?.data?.project_name) {
        document.title = project.data.project_name;
      } else {
        document.title = "Application"; // Set a default title if project data doesn't have it
      }
    }, [project]);
      return (
    <div>
      <div className='w-full absolute z-20 text-center bg-blue-700'>
            <span className='p-2 text-white font-bold text-lg'>View Only</span>
          </div>
        <div className="z-0 w-screen h-screen">
          
          {loading ? (
            <div className="bg-gray-50 z-10 h-screen ">
              <h1 className="text-4xl text-center ">Loading</h1>
            </div>
          ) : (
            <ReactFlowFunction data={data} />
          )}
        </div>
    </div>
  )
}

