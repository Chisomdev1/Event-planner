import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import profilepics from "../assets/images/profile.jpeg";

const MainNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    
    const navigate = useNavigate();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className="bg-white shadow-md py-4">
                <div className="container md:mx-auto px-4 flex md:flex-row justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-0"></h1>
                    <div className="relative flex items-center space-x-4">
                        {/* Create Event Button */}
                          <button
                            className="text-black inter"
                            onClick={() => navigate("/create")}
                        >
                            Create Event
                        </button>

                        {/* Search Icon */}
                        <CiSearch className="text-gray-600 w-6 h-6 hover:text-blue-600 transition" />

                        {/* Notifications Icon */}
                        <IoNotificationsOutline className="text-gray-600 w-6 h-6 hover:text-blue-600 transition" />

                        {/* Profile Picture */}
                        <img
                            src={profilepics}
                            alt="Profile"
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 hover:shadow-md transition cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div
                                ref={menuRef}
                                className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                            >
                                <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    chisom.sui
                                </p>
                                <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    chisom@example.com
                                </p>
                                <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Settings
                                </p>
                                <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Sign Out
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MainNavbar