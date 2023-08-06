'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import Sidebar from '../Navbar/sidebar';
import Projects from './projects'
import UploadFile from './uploadFile'
import DashboardLoad from '../../loadings/DashboardLoad'
import Head from 'next/head';




function Page() {

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

export default Page