'use client'
import Link from 'next/link'
import Navbar from './(components)/Navbar/navbar'
export default function Home() {
  return (
   <main className='h-screen w-screen overflow-hidden'>
    {/* <Navbar/> */}
    {/* <ReactFlowFunction/> */}
    <Link href="/authentication/login">Login</Link>
    <Link href="/authentication/register">Register</Link>
<Link href={'/dashboard'}>Dashboard</Link>
<Link href={'app/jhbd'}>React Flow Diagram</Link>
   </main>
  )
}
