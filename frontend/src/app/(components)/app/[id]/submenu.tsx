'use client'
import { Dropdown } from 'flowbite-react'
import React from 'react'
import {SiPolymerproject} from 'react-icons/si'
import {FcLink, FcDownload, FcImageFile} from 'react-icons/fc'
import {PiFilePdf} from 'react-icons/pi'
import {MdDelete} from 'react-icons/md'
function Submenu() {
  return (
    <div className='w-screen h-8 bg-blue-100'>
        <div className='flex justify-between'>
{/* Project Name  */}
<div className='max-w-xs h-10'>
<div className="relative ml-10">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
 <SiPolymerproject/>
  </div>
  <input type="text" id="input-group-1" className="h-8 bg-transparent border-none text-gray-900 text-sm 
  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600
   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
   value="untitled project" />
</div>
</div>



<div className='h-6 my-1 items-center align-middle select-none border-l-2 px-2 border-gray-700'>
<Dropdown
      inline
      label="Actions"
    >
<Dropdown.Item icon={FcLink}>
    Share
</Dropdown.Item>
<Dropdown.Item icon={FcDownload}>
    Download yaml file
</Dropdown.Item>
<Dropdown.Item icon={PiFilePdf}>
    Export as pdf
</Dropdown.Item>
<Dropdown.Item icon={FcImageFile}>
    Export as Image
</Dropdown.Item>
<Dropdown.Item  className=' text-red-500 hover:text-red-700' icon={MdDelete}>
Delete
</Dropdown.Item>


    </Dropdown>
    </div>
        </div>
       
    </div>
  )
}

export default Submenu