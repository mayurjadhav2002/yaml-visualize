'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { loginUser } from '../../../Axios/store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<any>();
  const router = useRouter()

  // Event Trigger on Form Submit
  const handleLoginEvent =async (e:React.FormEvent<EventTarget>) => {
    interface Credential {
      email: String,
      password: String
    }
    const userCredential: Credential = {
          email, password
      }
      // dispatching data to hooks in Axios folder
      dispatch(loginUser({userCredential})).then((result:any)=> {
          if (result.payload) {
            toast.success("Logged In! Redirecting to Dashboard", {
                position: toast.POSITION.BOTTOM_LEFT
              });
              setEmail('');
              setPassword('');
              router.replace('/dashboard')
            }
            else{
              toast.error("Please Check your Credentials Again", {
                position: toast.POSITION.BOTTOM_LEFT
              });
            }
      })
  }
  useEffect(() => {

    document.title = "Login";

}, []);


  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
                <ToastContainer />

      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center'>
        {/* First Column */}
          <div className='hidden lg:block w-fullh-auto items-center'>
            <img src={'https://i.postimg.cc/SKSqJ3bj/undraw-Login-re-4vu2.png'} alt="Image" className='my-auto' />
        </div>
          
          
          
          {/* Second Column */}
        <form  className='m-auto w-full lg:p-28  p-10 justify-center'>
          <div className='w-full py-5 -mt-10'>
          <h1 className='text-3xl font-bold mb-2'>Sign In</h1>
<h5 className='lg:text-md text-sm text-gray-400'>Sign in & Resume Your Journey to YAMLiazer</h5>
          </div>
          {/* Form Starts */}
          <div className="grid gap-6 mb-4 md:grid-cols-2 ">
          </div>
          {/* Email Input */}
          <div className="mb-4">
      <div className="mb-2 block">
        <Label
          htmlFor="email"
          value="Your email"
        />
      </div>
      <TextInput
        id="email"
        onChange={e=>setEmail(e.target.value)}

        placeholder="username@gmail.com"
        required
        type="email"
      />
          </div>
          {/* Password Input */}
          <div className="mb-4">
          <div className="mb-2 block">
        <Label
          htmlFor="password"
          value="Password"
        />
      </div>
      <TextInput
        helperText={<><Link className=" text-right text-xs font-medium text-gray-600 hover:underline
         dark:text-gray-500" href="/forms">Forget Password</Link></>}

        id="password"
        placeholder="**************************"
        required
        type="password"
        onChange={e=>setPassword(e.target.value)}

      />
          </div>
          {/* Submit Button */}
          <button onClick={handleLoginEvent} type="button" className="w-full text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 
          font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
  


  <hr></hr>

          {/* Other Links */}
          <div className='pt-10'>
            <p className='text-md bottom-0 lg:text-sm text-gray-600'>
              Don&apos;t Have an Account? <Link href="/authentication/register"
               className='text-md lg:text-md text-blue-600 hover:underline'>Sign Up Now...</Link></p>
          </div>
          <div className='mt-5'>
        <p className='font-semibold'>For demo:</p>
        <p>email: demo@gmail.com</p>
        <p>password: demo</p>
      </div>
        </form>
        
        {/* Form Ends */}

      

      </div>
 
    </div>
  )
}

export default Page