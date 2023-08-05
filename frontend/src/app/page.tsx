'use client'
// import Link from 'next/link'
import Nav from './(components)/landing/Nav'
import Hero from './(components)/landing/Hero'
import Feature from './(components)/landing/Feature'


export default function Home() {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <Nav />
      {/* <ReactFlowFunction/> */}

{/* hero Section */}
    <Hero/>
    <Feature/>
    </main>
  )
}
