import React, { useState, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FcFile } from 'react-icons/fc';
import axios from 'axios';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

export default function UploadFile({ user }) {
  const [uploadInProgress, setUploadInProgress] = useState(false);

  const handleChangeStatus = useCallback(async ({ meta, file }, status) => {
    console.log(status);

    if (status === 'done' && !uploadInProgress) {
      try {
        setUploadInProgress(true);

        toast('Uploading File', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar',
        });

        const header = {
          Authorization: user.token,
        };

        const body = new FormData();
        body.append('file', file);
        body.append('user', user._id);

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/file/upload`,
          body,
          { headers: header }
        );

        if (response) {
      
          console.log('file uploaded');
          toast.update(toastId.current, {
            render: 'File Uploaded',
            type: toast.TYPE.INFO,
            autoClose: 5000,
          });

          // Redirect to another URL once the file is uploaded successfully
          // Replace "YOUR_REDIRECT_URL" with the desired URL
          window.location.href =  '/app/'+response.data.res.unique_key;
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setUploadInProgress(false);
      }
    }
  }, []);

  const toastId = React.useRef(null);

  return (
    <div>
      {/* File Upload */}
      <form>
        <ToastContainer />

      
        <div className='flex items-end gap-5 justify-between'>
            <h1 className='text-xl font-semibold flex items-center'> Upload New File</h1>
        </div>

        <div className='w-full relative mt-5 overflow-hidden bg-blue-50 text-center border-4 border-dotted border-blue-300'>
          

          <Dropzone
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            canCancel={true}
            styles={{
              dropzone: { overflow: 'hidden', zIndex: 0 },
              dropzoneActive: { borderColor: 'green' },
            }}
            inputContent={(files, extra) =>
              extra.reject ? (
                'YAML files only'
              ) : (
                <div className='py-10'>
                        <div>
                            <FcFile className="mx-auto w-8 h-8 p-1 rounded-md bg-blue-100" />
                        </div>
                        <h1 className='text-md font-semibold'>Drag and Drop File, or <span className='text-blue-500'>Browse</span></h1>
                        <span className='text-gray-600 text-sm'>Support Only .yaml or .yml Files</span>
                </div>
              )
            }
          />
        </div>
      </form>
    </div>
  );
}
