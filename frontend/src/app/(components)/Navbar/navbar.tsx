'use client'
import React from 'react'
import Account from './account'
import Link from 'next/link'


function Navbar() {
  return (
    <div>
      <header className="bg-white border-b-2 border-gray-100">
        <div
          className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8"
        >
          <Link className="block text-blue-600" href="/">
           <h3 className='text-lg font-bold'>YAML visualizer</h3>
        
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
              <li>
                  <Link href={'/dashboard'} className="text-gray-500 transition hover:text-gray-500/75">
                    Dashboard

                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/Helper/how-to-guide'}>
                    How to Use
                  </Link>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href={'/Helper/documentation'}>
                    Guide
                  </a>
                </li>

              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
<Account/>
              </div>

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Navbar