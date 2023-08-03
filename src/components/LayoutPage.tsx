// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const LayoutPage = () => {
    return (
        <div className="container-flui">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutPage