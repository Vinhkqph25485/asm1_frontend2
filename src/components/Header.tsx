import { Link } from "react-router-dom";
import Menu from "./Menu"; 

const Header = () => {
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
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    );
};

export default Header;
