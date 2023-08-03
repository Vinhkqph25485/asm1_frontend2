import { Outlet } from "react-router-dom"

import Header from "./Header"
import Nav from "./Nav"
const LayoutAdmin = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="">
                <Nav />
            </div>
            <div className="flex flex-col flex-1 overflow-auto overflow-x-hidden">
                <Header />
                <div className="w-11/12 mx-auto">
                    <Outlet />
                </div>

            </div>


        </div>
    )
}

export default LayoutAdmin