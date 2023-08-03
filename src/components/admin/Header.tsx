import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">
                    <div className="relative hidden sm:block">
                        <input
                            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-96"
                            id="search"
                            type="search"
                            placeholder="Search"
                        />

                        <button
                            type="button"
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <AiOutlineSearch />
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                            >
                                <span className="sr-only">Notifications</span>
                                <AiOutlineBell />
                            </a>
                        </div>

                        <button
                            type="button"
                            className="group flex shrink-0 items-center rounded-lg transition"
                        >
                            <img
                                alt="Man"
                                src="https://th.bing.com/th/id/OIP.6qOwcC9kI7wOCXOEVB3JagHaEs?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <p className="ms-2 hidden text-left text-xs sm:block">
                                <strong className="block font-medium">Admin</strong>
                                <span className="text-gray-500">admin@gmail.com</span>

                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header