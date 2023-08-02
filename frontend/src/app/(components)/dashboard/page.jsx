'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import Sidebar from '../Navbar/sidebar';
import Projects from './projects'
import UploadFile from './uploadFile'
if (typeof window !== 'undefined'){
  var user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    console.log(user)
  } else {
  
  } 
}


function page() {

  return (
    <div>

      
      <Navbar/>
      <Sidebar/>
      <div className=" sm:ml-64 ">
    
    <div className="p-4">
    
      <Projects/>
      </div>
    
      </div>
    </div>

  )
}

export default page