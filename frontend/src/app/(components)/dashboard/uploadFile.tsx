import React, { useRef } from 'react'
import {FcFile} from 'react-icons/fc'
function UploadFile() {
    const inputRef = useRef(null);


  return (
    <div className='my-10'>
          <div className='flex items-end gap-5 justify-between'>
                    <h1 className='text-xl font-semibold flex items-center'> Upload New File</h1>
                </div>
                <div className='w-auto border-2 border-dotted bg-blue-50 text-center 
                p-2 py-5 cursor-pointer rounded-lg border-blue-600 my-5'>

<div className='py-10'>
    <div>
        <FcFile className="mx-auto w-8 h-8 p-1 rounded-md bg-blue-100"/>
    </div>
<h1 className='text-md font-semibold'>Drag and Drop File, or <span className='text-blue-500'>Browse</span></h1>
<span className='text-gray-600 text-sm'>Support Only .yaml or .yml Files</span>
</div>



<figure className="mx-auto relative max-w-sm transition-all duration-300 ">
  <input type='file'
    ref={inputRef} className='hidden' name='file'></input>
</figure>

</div>



    </div>
    
  )
}

export default UploadFile