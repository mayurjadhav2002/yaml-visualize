'use client'
import axios from 'axios';
import { Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false)
  const [status, setStatus] = useState(0);

  const url = 'http://192.168.0.105:3080/api/register';
  const handleSubmit = async () => {
    const body = {
      "first_name": firstname,
      "last_name": lastName,
      "email": email,
      "password": password
    }
    try {
      setloading(true);
      const result = await axios.post(url, body);
      if (result) {
        console.log(result)
        setloading(false)
      } else {
        setError('error occured')
      }
    } catch (error) {
      console.log("Error", error)
      alert("Some Internal error occured")
    }
  }
  // console.log(status)
  return (
    <div>

      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center'>
        {/* First Column */}
        <div className='m-auto w-full lg:p-28  p-10 justify-center'>
          <div className='w-full py-5 -mt-10'>
            <h1 className='text-3xl font-bold mb-2'>Sign Up</h1>
            <h5 className='lg:text-md text-sm text-gray-400'>Create an Account to Start using YAMLiazer</h5>
          </div>
          {/* Form Starts */}
            <div className="grid gap-6 mb-4 md:grid-cols-2 ">
              {/* Name Input */}
              <div>
                <div className="mb-2 block">

                  <Label
                    htmlFor="fname"
                    value="First Name"
                  /></div>
                <TextInput
                  id="fname"
                  placeholder="John"
                  required
                  shadow
                  onChange={e => setFirstName(e.target.value)}
                  type="text"
                />

              </div>
              {/* Name Input */}
              <div>
                <div className="mb-2 block">

                  <Label
                    htmlFor="lname"
                    value="Last Name"
                  /></div>
                <TextInput
                  id="lname"
                  placeholder="Doe"
                  required
                  shadow
                  onChange={e => setLastName(e.target.value)}

                  type="text"
                />
              </div>


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
              onChange={e => setEmail(e.target.value)}

              placeholder="username@gmail.com"
              required
              type="email"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
              />
            </div>
            <TextInput
              id="password"
              placeholder="**************************"
              required
              type="password"
              onChange={e => setPassword(e.target.value)}

            />
          </div>
          {/* Submit Button */}
          <button onClick={e => handleSubmit()} type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
          font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>



          <hr></hr>

          {/* Other Links */}
          <div className='pt-10'>
            <p className='text-md bottom-0 lg:text-sm text-gray-600'>
              Already Have Accout? <Link href="/authentication/login"
                className='text-md lg:text-md text-blue-600 hover:underline'>Sign In Now...</Link></p>


          </div>

        </div>
        {/* Form Ends */}

        {/* Second Column */}
        <div className=' hidden lg:block w-full bg-blue-50 h-screen'>
        </div>

      </div>
    </div>
  )
}

export default page