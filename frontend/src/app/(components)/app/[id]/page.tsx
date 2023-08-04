import React from "react"
import { ReactFlowFunction } from "./reactFlow"
import Navbar from "../../Navbar/navbar"
import './index.css'
import Submenu from "./submenu"
export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="w-full h-screen">
<div className="z-10 absolute w-full">
<Navbar/>
<Submenu/>
</div>
<div className="z-0 w-screen h-screen">
<ReactFlowFunction/>
</div>

    

        </div>

    )

  }