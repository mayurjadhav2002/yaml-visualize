'use client'
// import Link from 'next/link'
import Nav from './(components)/landing/Nav'
import Hero from './(components)/landing/Hero'
import Feature from './(components)/landing/Feature'
import React from 'react'

export default function Home() {
  React.useEffect(() => {

    document.title = "YAML Visualizer";

}, []);
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
  
      <Nav />
    <Hero/>
    <Feature/>
    </main>
  )
}
