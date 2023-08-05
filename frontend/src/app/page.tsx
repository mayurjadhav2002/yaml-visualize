'use client'
import Link from 'next/link'
import HomePage from './(components)/Navbar/HomePage'


export default function Home() {
  return (
    <main className='h-screen w-screen overflow-x-hidden'>
      <HomePage />
      {/* <ReactFlowFunction/> */}

{/* hero Section */}
      <div className='-z-10'>

        <div className="relative">
          <div className="text-center -z-10 align-middle justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center gap-2 ">
              <div className="lg:col-span-3 justify-center">
                <div className="relative z-10">
                  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">
                      <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                        Visualize Yaml file
                      </p>
                      <div className="mt-5 max-w-2xl">
                        <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                          The Intuitive way to Visualize YAML
                        </h1>
                      </div>
                      <div className="mt-5 max-w-3xl">
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          Login or register to start visualizing your YAML files and manage your projects with ease!

                        </p>
                      </div>
                      <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                        <Link href={'/authentication/login'} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Login</Link>
                        <Link href={'/authentication/register'}
                          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >Register</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 z-0 lg:flex hidden mt-10 bg-red-50 md:flex overflow-clip lg:mt-0">
                <img
                  className="w-full right-0 flex cursor-pointer object-cover select-none"
                  src={'https://res.cloudinary.com/practicaldev/image/fetch/s--kY2VugkF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/k5ipvd7mvn2wd6le141x.gif'}
                  alt="Image Description"
                  title='This is Just an GIF'
                />

              </div>
            </div>
          </div>
        </div>  
        <hr/>
        <div className="text-center">
          
        </div>
        </div>


    </main>
  )
}
