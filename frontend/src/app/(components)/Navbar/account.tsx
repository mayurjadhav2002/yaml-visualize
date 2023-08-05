'use client'
import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import {BiCaretDown} from 'react-icons/bi'


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


function Account(){
  const handleLogout = ()=>{
    localStorage.removeItem('user')
    user= null;

    // navigate('/login')
    window.location.href = 'http://localhost:3000/authentication/login';
  }
  return (
    <>
    <div>
          <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="flex w-full justify-center rounded-md items-center
           bg-blue-300 bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 
           focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className='flex gap-1 items-center'>
                <img className='w-7 h-7 rounded-full'
              
                 src={process.env.NEXT_PUBLIC_IMAGE_URL+ '/avatar.png'} alt="" />
                <div className='text-left'>
                    <span>{user.first_name} {user.last_name}</span>
                </div>
            </div>
            <div>
            <BiCaretDown
            className="my-auto h-5 w-5 text-gray-400 hover:text-gray-600"
            aria-hidden="true"
            />
            </div>
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md 
          bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  disabled >
                   
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500  text-white' : 'text-gray-900'
                    } group cursor-not-allowed bg-gray-50 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                 disabled >
               
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-red-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
               onClick={handleLogout}    >
              
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>
  )
}

export default Account