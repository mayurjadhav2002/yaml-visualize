import { Button, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React, { useState, Fragment, useCallback } from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import {SiYaml} from 'react-icons/si'
import UploadFile from './uploadFile'
import UserProjects from '../../Axios/Requests/UserProjects'
import 'react-dropzone-uploader/dist/styles.css'
import moment from 'moment'
import Head from 'next/head'
// import { useRouter } from 'next/router'
if (typeof window !== 'undefined') {
    var user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        // console.log(user)
    } else {

    }
}


export default function projects() {
    // const router = useRouter()

    // const {user_id} = router.query;

    const {
        projects,
        loading, getData
    } = UserProjects(`/api/file/projects?user=64c7cf3b1370ccd6fef6b0ab`);
    // File Upload 
    // called every time a file's `status` changes
    // const handleChangeStatus = ({file}) => { 
    //     const body  = new FormData();
    //     body.append('file', file)
    //     const request:Boolean = axios.post('http://localhost:3080/api/file/demo_upload', body)
    //     if(request){
    //         console.log('file uploaded')
    //     }else{
    //         console.log("failed")
    //     }    }
// const data = projects.data;
    return (
        <div>
    <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
            <div id="recentenly-added">
                {/* Headings */}
                <div className='flex items-end gap-5 justify-between'>
                    <h1 className='text-xl font-semibold flex items-center'><FcOpenedFolder className="mr-2 h-8 w-8" /> Your Files</h1>
                </div>

                {/* Recentely Viewed Cards */}
                <div className="grid lg:grid-cols-5 gap-4 grid-cols-2 my-3">
                    {/* card starts */}
                    {projects.map((data)=> (
                             <Link href={`/app/${data.unique_key}`} className='card  w-full h-auto p-1 cursor-pointer hover:shadow-xl rounded-lg'>
                             <div className='group img w-5/6 relative bg-gray-50 mx-auto h-40 rounded-lg'>
                             
                             <SiYaml className=" absolute mt-8 p-2 rounded-full w-8 h-8 bg-blue-200  ml-7"/>
                                 <div className='invisible  group-hover:visible 
                                 flex flex-col items-center justify-center bg-blue-100 h-full w-full bg-opacity-30'>
                                     <Button color="dark" pill>
                                         See more...
                                     </Button>
                                 </div>
                             </div>
                             <div className='flex justify-between  w-5/6 px-2 py-2 mx-auto'>
                                 <div className='w-full overflow-clip text-ellipsis'>
                                     <p className='truncate lg:text-md text-sm font-semibold'>
                                         {data.project_name || 'Untitled Project'}
                                     </p>
                                     <span className='text-xs text-gray-700 font-semibold'>
                                     Opened {moment.utc(data.updatedAt).local().startOf('seconds').fromNow()}

                                     </span>
                                 </div>
                             </div>
                             <div>
     
                             </div>
     
                         </Link>
                 ))} 
           
                    {/* card ends */}

                </div>
            </div>
            {/* File Upload */}
            <UploadFile user={user} />


        </div>
    )
}


