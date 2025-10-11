import React from "react";

const Navbar = () => {
return (
    <nav className="bg-gradient-to-r from-blue-300 to-purple-500 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <span className="text-white font-extrabold text-3xl tracking-wide  drop-shadow-lg">MyNavbar</span>
            </div>
            <div className="flex gap-5">
                <a
                    href="#"
                    className="text-white font-medium px-4 py-2 "
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-white font-medium px-4 py-2 "
                >
                    About
                </a>
                <a
                    href="#"
                    className="text-white font-medium px-4 py-2 "
                >
                    Contact
                </a>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
