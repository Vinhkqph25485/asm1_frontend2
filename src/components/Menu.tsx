import { useEffect } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* logo */}
                    <Link to="/" className="md:flex md:items-center md:gap-12">
                        <img
                            src="https://giayxshop.vn/wp-content/uploads/2018/12/xshop-light.png"
                            className="brightness-0 w-full h-8"
                            alt=""
                        />
                    </Link>
                    
                    {/* menu */}
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-base">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                        Giày Nike
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                        Giày Vans
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                        Giày Adidas
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                        Dép
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                        Giảm giá
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* search */}
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                className="h-10 w-full rounded-full bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                                id="search"
                                type="search"
                                placeholder="Search..."
                            />

                            <button
                                type="button"
                                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                            >
                                <span className="sr-only">Search</span>
                                <a href="carts">
                                    <AiOutlineSearch />
                                </a>
                            </button>

                        </div>
                        <button> <Link to="carts"> <AiOutlineShoppingCart className="w-6 h-6 mx-4" /></Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;


