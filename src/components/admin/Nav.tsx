import { VscAccount } from 'react-icons/vsc'
import { RiProductHuntLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { BiCategoryAlt } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface User {
    name: string;
    email: string
}
const Nav = () => {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
      });
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
        navigate('/')
      };
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <Link to={"/admin"} className="grid h-10 w-32 place-content-center rounded-lg text-xs text-gray-600">
                    <img
                        src="https://giayxshop.vn/wp-content/uploads/2018/12/xshop-light.png"
                        className="brightness-0 w-full h-8"
                        alt=""
                    />
                </Link>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            to={`products`}
                            className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <RiProductHuntLine className="w-6 h-4" />Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <a
                            href=""
                            className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <BiCategoryAlt className="w-6 h-4" /> Danh mục
                        </a>
                    </li>

                    <li>

                        <a
                            href=""
                            className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <VscAccount className="w-6 h-4" />
                            Tài khoản
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <form >
                    <button
                    onClick={() => handleLogout()}
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <RiLogoutBoxRLine className="h-5 w-5 opacity-75" />
                        <span
                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                        >
                            Logout
                        </span>
                    </button>
                </form>
            </div>

        </div >
    )
}

export default Nav