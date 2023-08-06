import { Link } from "react-router-dom";
import Menu from "./Menu"; 


import { useState } from "react";

interface User {
    name: string;
}

const Header = () => {
    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });
    

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null)
    };
    console.log("local", localStorage.getItem('user'))
    
    return (
        <header className="bg-gray-50 sticky-header sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <p className="text-2xl font-bold text-gray-900 sm:text-xl">
                            Chào mừng đến với xshop
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    {loggedIn ? (
                            <>
                                <div className="text-white me-3">Xin chào : {loggedIn.name}</div>
                                <button onClick={handleLogout} className="btn btn-primary ms-3 " style={{ marginRight: "30px" }} > Logout</button>
                            </>
                        ) : (
                            <>
                                <button
                            className="block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring"
                            type="button"
                        >
                          <Link to={"/signin"}>Đăng nhập</Link>
                        </button>

                        <button
                            className="block rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                             <Link to={"/signup"}>Đăng kí</Link>
                        </button>
                            </>
                        )}
                       
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    );
};

export default Header;
