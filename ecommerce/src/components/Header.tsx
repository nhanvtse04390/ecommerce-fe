'use client'
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Company Name */}
                <div className="flex items-center hidden md:flex">
                    <div className="rounded-full h-12 w-12 overflow-hidden">
                        <a href='/'><img src="/logo/logo.png" alt="Logo" className="h-full w-full object-cover" /></a>
                    </div>
                    <div className="text-white font-semibold text-lg ml-2">
                        <a href='/'>ECOMMERCE</a>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 px-4 bg-gray-200 rounded-md w-full focus:outline-none focus:ring focus:border-orange-300"
                        />
                        <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.293 13.707a1 1 0 01-1.414 1.414l-3.586-3.586a5 5 0 111.414-1.414l3.586 3.586zM9 4a5 5 0 100 10A5 5 0 009 4z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Hamburger Menu */}
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:space-x-4">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="/product/create" className="text-white hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <nav className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="/product/create" className="text-white hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
