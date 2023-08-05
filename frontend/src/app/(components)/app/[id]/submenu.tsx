'use client'
import { Dropdown, Toast } from 'flowbite-react'
import React, { useState, useEffect, useRef} from 'react'
import {SiPolymerproject} from 'react-icons/si'
import {FcLink, FcDownload, FcImageFile} from 'react-icons/fc'
import {PiFilePdf} from 'react-icons/pi'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// Get User Data
if (typeof window !== 'undefined') {
    var user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        console.log(user)
    } else {
      window.location.href = '/authentication/login';
  
    }
  }
  

  function Submenu({ id, projectData }) {
    const [projectName, setProjectName] = useState(projectData || null);
    // Project Name Change
    const handleProjectNameChange = (e:any) => {
        setProjectName(e.target.value);
      };
    
      const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (projectName && isMounted.current) {
      const delayDebounceFn = setTimeout(async () => {
        try {
        if(projectName.length>1){

      
          const body = {
            project_name: projectName,
          };
          
          console.log('Request body:', body);

          // ... rest of the code ...
          const req = await axios.put(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/update_project_name?unique_key=${id}&project_name=${projectName}`,
            { body },
            {
              headers: {
                Authorization: user.token,
              },
            }
          );
          if (req) {
            toast.success('Title Updated !', {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          
          console.log(req);
        }
        } catch (error) {
          console.log(error);
        }
      }, 3000);
    
      return () => clearTimeout(delayDebounceFn);
      
    }
  }, [projectName, id, user.token]);
// Share Button 



const HandleShare = async(e:any) =>{
    toast("Custom Style Notification with css class!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      });

}
// Handling Delete Button


const HandleDelete = async (e: any) => {
    console.log('id prop:', id);
  
    try {
      const body = {
        unique_key: id,
        user: user._id,
      };
      console.log('Request body:', body);
      toast.success("Deleting....", {
        position: toast.POSITION.TOP_CENTER
      });
      // ... rest of the code ...
      const req = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/delete?unique_key=${id}`, {body}, {
        headers:{
        Authorization:user.token
    }})
    if(req){
        toast.success("Deleted !", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    console.log(req)
    } catch (error) {
      console.log(error);
    }
  };


// Event Handling for Export Buttons
const HandleExportasPDF = async(e:any) =>{
    const report = new JsPDF('portrait','pt','a4');
    report.html(document.getElementById('reactFlow')).then(() => {
        report.save('Untitled.pdf');
    })
}


const HandleExportasImage = async(e:any) =>{

    toast("Generating Your Image File", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      });
    const export_image = document.getElementById('reactFlow');

    html2canvas(export_image).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'YAML-Image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
    console.log("Image Export")
}

// Event for Downloading YAML File
const HandleYAMLDownload = async(e:any) =>{
    return (
        
        <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <SiPolymerproject className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Set yourself free.
        </div>
        <Toast.Toggle />
      </Toast>
    )

}




  return (
    <div className='w-screen h-8 bg-blue-100'>
        <div className='flex justify-between'>
{/* Project Name  */}
<div className='max-w-xs h-10'>
<div className="relative ml-10">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
 <SiPolymerproject/>
  </div>
  <input type="text"  id="input-group-1" className="h-8 bg-transparent border-none text-gray-900 text-sm 
  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  onChange={handleProjectNameChange} 
  value={projectName}
  placeholder='Update Project Title'
  />
</div>
</div>



<div className='h-6 my-1 items-center align-middle select-none border-l-2 px-2 border-gray-700'>
<Dropdown
      inline
      label="Actions"
    >
<Dropdown.Item icon={FcLink} onClick={HandleShare}>
    Share
</Dropdown.Item>
<Dropdown.Item icon={FcDownload} onClick={HandleYAMLDownload}>
    Download yaml file
</Dropdown.Item>
<Dropdown.Item icon={PiFilePdf} onClick={HandleExportasPDF}>
    Export as pdf
</Dropdown.Item>
<Dropdown.Item icon={FcImageFile} onClick={HandleExportasImage}>
    Export as Image
</Dropdown.Item>
<Dropdown.Item  className=' text-red-500 hover:text-red-700' icon={MdDelete} onClick={HandleDelete}>
Delete
</Dropdown.Item>


    </Dropdown>
    </div>
        </div>
                 <ToastContainer autoClose={1000} />

    </div>
  )
}

export default Submenu