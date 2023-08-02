import Link from 'next/link'
import React from 'react'

import {MdOutlineDashboard, MdOutlineShare, MdStarOutline, MdDelete} from 'react-icons/md'
function Sidebar() {
    return (
        <div>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 -z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href='/'

                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <MdOutlineDashboard/>
                               
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/publish-new-article'

                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
<MdOutlineShare/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Shared</span>
                             
                            </Link>
                        </li>
                        <li>
                            <Link href='/contribute/software-articles'

                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                         <MdStarOutline/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Favourite</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/community/inbox'

                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                          <MdDelete/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Recycle Bin</span>
                        
                            </Link>
                        </li>

                    
                    </ul>
                </div>
            </aside>

        </div>

    )
}

export default Sidebar
