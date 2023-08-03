'use client'
import Navbar from './(components)/Navbar/navbar'
import {ReactFlowFunction} from './reactflow/reactFlow'
export default function Home() {
  return (
   <main className='h-screen w-screen overflow-hidden'>
    {/* <Navbar/> */}
    <ReactFlowFunction/>
   </main>
  )
}
