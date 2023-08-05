'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import Sidebar from '../Navbar/sidebar';
import Projects from './projects'
import UploadFile from './uploadFile'
import DashboardLoad from '../../loadings/DashboardLoad'
import Head from 'next/head';
if (typeof window !== 'undefined'){
  var user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    console.log(user)
  } else {
  
  } 
}




function page() {

  useEffect(() => {

      document.title = "Dashboard";
  
  }, []);

  return (
    <div>
    <Head>
        <title>Dashboard</title>
      </Head>
      
      <Navbar/>
      <Sidebar/>
      <div className=" sm:ml-64 ">
    
    <div className="p-4">
    <Suspense fallback={<DashboardLoad/>}>
    <Projects/>

    </Suspense>
      </div>
    
      </div>
    </div>

  )
}

export default page