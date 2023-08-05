import React from 'react'

function DashboardLoad() {
    return (
        <div>
            <div>
                <div id="recentenly-added">
                    {/* Headings */}
                    <div className='flex items-end gap-5 justify-between'>
                        <h1 className='text-xl font-semibold flex items-center'><div className="mr-2 h-8 w-8"></div> Your Files</h1>
                    </div>

                    {/* Recentely Viewed Cards */}
                    <div className="grid lg:grid-cols-5 gap-4 grid-cols-2 my-3">
                        {/* card starts */}
                        
                        <div className='card animate-pulse w-full h-auto p-1 cursor-pointer hover:shadow-xl rounded-lg'>
                            <div className='group img w-5/6  bg-gray-300 mx-auto h-40 rounded-lg'>
                                <div className='invisible group-hover:visible 
                            flex flex-col items-center justify-center bg-gray-200 h-full w-full bg-opacity-30'>

                                </div>
                            </div>
                            <div className='flex justify-between  w-5/6 px-2 py-2 mx-auto'>
                                <div className='w-3/4 overflow-clip text-ellipsis'>
                                    <div className='truncate lg:text-md text-sm font-semibold bg-gray-300 h-5 w-full'></div>
                                    <div className='truncate lg:text-md text-sm font-semibold bg-gray-200 h-3 mt-1 w-full'></div>
                                </div>
                            </div>
                            <div>

                            </div>

                        </div>
                        {/* card ends */}


                         

                    </div>
                </div>
                {/* File Upload */}
                <div>   {/* File Upload */}
                    <form >
                        <div className='flex items-end gap-5 justify-between'>
                            <h1 className='text-xl font-semibold flex items-center animate-pulse '> Upload New File</h1>
                        </div>

                        <div className='w-full relative mt-5 animate-pulse overflow-hidden bg-gray-50 text-center border-4 border-dotted border-gray-300'>


                            <div
                                className='w-full h-40  bg-gray-200'



                            ></div>


                        </div>

                    </form></div>

            </div>
        </div>
    )
}

export default DashboardLoad