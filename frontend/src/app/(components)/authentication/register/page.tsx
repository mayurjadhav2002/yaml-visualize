'use client'
import { Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { HiMail, HiLockClosed } from 'react-icons/hi';

function page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [error, setError] = React.useState('');

  console.log(firstname)
  return (
    <div>
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center'>
        {/* First Column */}
        <div className='m-auto w-full  p-10 justify-center'>

          <h1 className='w-full py-5 -mt-10 text-4xl font-bold'>Registering can Get you 10 Steps Ahead </h1>
          {/* Form Starts */}
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
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
                onChange={e=>setFirstName(e.target.value)}
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
                onChange={e=>setLastName(e.target.value)}

                type="text"
              />
            </div>


          </div>
          {/* Email Input */}
          <div className="mb-6">
      <div className="mb-2 block">
        <Label
          htmlFor="email"
          value="Your email"
        />
      </div>
      <TextInput
        icon={HiMail}
        id="email"
        onChange={e=>setEmail(e.target.value)}

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
        icon={HiLockClosed}
        id="password"
        placeholder="**************************"
        required
        type="password"
        onChange={e=>setPassword(e.target.value)}

      />
          </div>
          {/* Submit Button */}
          <button type="button" className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
          {/* Other Links */}
          <div className='flex justify-between'>
            <Link href="/authentication/login" className='text-xs lg:text-sm text-gray-600 '>Dont Have Accout? login here...</Link>
            <Link href="/" className='text-xs lg:text-sm text-gray-600 '>Forget Password?</Link>

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