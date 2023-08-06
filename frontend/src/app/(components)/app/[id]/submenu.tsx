'use client'
import {  Dropdown, Modal } from 'flowbite-react'
import React, { useState, useEffect, useRef } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { FcLink, FcDownload, FcImageFile } from 'react-icons/fc'
import { PiFilePdf } from 'react-icons/pi'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const download = require("downloadjs");


// Get User Data
var user = localStorage.getItem('user');
if (user) {
  user = JSON.parse(user);
  console.log(user)
} else {
  window.location.href = '/authentication/login';

}


function Submenu({ id, projectData }) {
  const [projectName, setProjectName] = useState(projectData?.project_name || null);
  const [url, setURL] = useState(null)
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  // Project Name Change
  const handleProjectNameChange = (e: any) => {
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
          if (projectName.length > 1) {


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



  const HandleShare = async (e: any) => {
    props.setOpenModal('dismissible')
    toast("Generating Share Link....", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
    const body = {
      original_url: process.env.NEXT_PUBLIC_APP_URL + '/share/' + id
    }
    const request = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/share`, body)
    try {
      if (request) {
        toast("Created New Share Link....", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
        console.log(request)
        setURL(request.data.res.shortID)
      }
    } catch (e) {
      console.log(e)
    }
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
      const req = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/delete?unique_key=${id}`, { body }, {
        headers: {
          Authorization: user.token
        }
      })
      if (req) {
        toast.success("Deleted !", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      window.location.href='/dashboard'
      console.log(req)
    } catch (error) {
      console.log(error);
    }
  };


  // Event Handling for Export Buttons
  const HandleExportasPDF = async (e: any) => {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.getElementById('reactFlow')).then(() => {
      report.save('Untitled.pdf');
    })
  }


  const HandleExportasImage = async (e: any) => {

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






  return (
    <div className='w-screen h-8 bg-blue-100'>
      <div className='flex justify-between'>
        {/* Project Name  */}
        <div className='max-w-xs h-10'>
          <div className="relative ml-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <BsPencilFill />
            </div>
            <input type="text" id="input-group-1" className="h-8 bg-transparent border-none text-gray-900 text-sm 
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
            <Dropdown.Item icon={FcDownload}

              onClick={async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/download`, { filename: projectData?.filename });
                const blob = await res.blob();
                download(blob, projectData?.filename);
              }}>
              Download yaml file
            </Dropdown.Item>

            <Dropdown.Item icon={PiFilePdf} onClick={HandleExportasPDF}>
              Export as pdf
            </Dropdown.Item>

            <Dropdown.Item icon={FcImageFile} onClick={HandleExportasImage}>
              Export as Image
            </Dropdown.Item>

            <Dropdown.Item className=' text-red-500 hover:text-red-700' icon={MdDelete} onClick={HandleDelete}>
              Delete
            </Dropdown.Item>


          </Dropdown>
        </div>
      </div>
      <ToastContainer autoClose={2000} className='z-20' />



      {url && (
        <Modal className='absolute z-10' dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
          <div className='px-5 py-5'>
            <Modal.Header>
              <h1 className='text-lg  font-bold'>Share URL</h1>

            </Modal.Header>
            <Modal.Body>
              <div className="space-y-2 pb-5">
                <div className="w-full my-3">
                  <div className="relative">

                    <input type="search" id="search" className="block w-full p-4 text-sm text-gray-900 cursor-not-allowed border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500" value={`${process.env.NEXT_PUBLIC_APP_URL}/v/${url}` || 'hIi'} disabled />
                    <button type="button"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/v/${url}`);
                        toast.success("Copied text to Clipboard !", {
                          position: toast.POSITION.BOTTOM_RIGHT
                        })
                      }}
                    >Copy to Clipboard</button>
                  </div>
                </div>
                <p>Copy the Above generated URL and Share with your Friends, Collaborators, Collegues or Teammates!</p>
                <p>No need of login to view the Mind Map</p>
              </div>

            </Modal.Body>

          </div>

        </Modal>
      )}
    </div>
  )
}

export default Submenu