import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-orange-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full h-12 w-12 overflow-hidden">
                        <img src="/logo/logo.png" alt="Logo" className="h-full w-full object-cover"/>
                    </div>
                    <div className="text-white font-semibold text-lg ml-2">ECOMMERCE</div>
                </div>

                {/* Thanh tìm kiếm */}
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

                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
