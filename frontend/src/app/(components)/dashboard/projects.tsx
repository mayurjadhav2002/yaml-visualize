import { Button, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React, { useState, Fragment, useCallback } from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import { Dialog, Transition } from '@headlessui/react'
import { FcFile } from 'react-icons/fc'
import { useDropzone } from "react-dropzone";
import axios from 'axios'




function projects() {
    let [isOpen, setIsOpen] = useState(false)
    const [projectName, setProjectName] = useState();

    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");
    const onUpload = () =>{
        console.log('upload')
    }

    const onDrop = useCallback((acceptedFiles: any) => {
    
        console.log(acceptedFiles);
    }, []);


    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles } = useDropzone({
        onDrop,
        minSize: 0,
    })

    // File Upload 


    return (
        <div>
            <div id="recentenly-added">
                {/* Headings */}
                <div className='flex items-end gap-5 justify-between'>
                    <h1 className='text-xl font-semibold flex items-center'><FcOpenedFolder className="mr-2 h-8 w-8" /> Your Files</h1>
                    <Button className="bg-purple-700 rounded-xl z-0" pill onClick={() => setIsOpen(true)}>Upload File</Button>
                </div>

                {/* Recentely Viewed Cards */}
                <div className="grid lg:grid-cols-5 gap-4 grid-cols-2 my-3">
                    {/* card starts */}
                    <div className='card  w-full h-auto p-1 cursor-pointer hover:shadow-xl rounded-lg'>
                        <div className='group img w-5/6  bg-gray-50 mx-auto h-40 rounded-lg'>
                            <div className='invisible group-hover:visible 
                            flex flex-col items-center justify-center bg-blue-100 h-full w-full bg-opacity-30'>
                                <Button color="dark" pill>
                                    See more...
                                </Button>
                            </div>
                        </div>
                        <div className='flex justify-between  w-5/6 px-2 py-2 mx-auto'>
                            <div className='w-3/4 overflow-clip text-ellipsis'>
                                <p className='truncate lg:text-md text-sm font-semibold'>Untitle Project 1 hello world</p>
                                <span className='text-xs text-gray-700 font-semibold'>14 minutes ago</span>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                    {/* card ends */}

                </div>
            </div>
            {/* File Upload */}
            <form >
                <div className='flex items-end gap-5 justify-between'>
                    <h1 className='text-xl font-semibold flex items-center'> Upload New File</h1>
                </div>

                <div {...getRootProps()} className='w-full mt-5 min-h-40 h-40 bg-blue-50 text-center border-4 border-dotted border-blue-300'>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <div className='py-10'>
                            <div>
                                <FcFile className="mx-auto w-8 h-8 p-1 rounded-md bg-blue-100" />
                            </div>
                            <h1 className='text-md font-semibold'>Drop here to Upload File</h1>
                        </div>) : (
                        <div className='py-10'>
                            <div>
                                <FcFile className="mx-auto w-8 h-8 p-1 rounded-md bg-blue-100" />
                            </div>
                            <h1 className='text-md font-semibold'>Drag and Drop File, or <span className='text-blue-500'>Browse</span></h1>
                            <span className='text-gray-600 text-sm'>Support Only .yaml or .yml Files</span>
                        </div>
                    )}
                    {isDragReject && "File type not accepted, sorry!"}
                    <ul className="list-group mt-2">
                        {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                            <li className="list-group-item list-group-item-success">
                                {acceptedFile.name}
                            </li>
                        ))}
                    </ul>
                    <p>{uploadStatus}</p>

                </div>

            </form>


            {/* PopUp model for File Upload */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Create New Project
                                    </Dialog.Title>

                                    <form className="mt-2">
                                        {/* Project Name */}
                                        <p className="text-sm text-gray-500">
                                            <TextInput placeholder='Project name' />
                                        </p>

                                        <div>
                                            {/* File Upload in Model */}

                                        </div>

                                    </form>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default projects