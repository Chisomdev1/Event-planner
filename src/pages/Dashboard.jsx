import React, { useState, useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import image from "../assets/images/image1.jpeg";
import profilepics from "../assets/images/profile.jpeg";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-0"></h1>
          <div className="relative flex items-center space-x-4">
            {/* Create Event Button */}
            <button className="text-black">
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

      {/* Main Content */}
      {/* Main Content */}
<main className="container mx-auto px-4 py-6 poppins">
<h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Events</h2>

{/* Event Cards */}
<div className="grid grid-cols-1 gap-6">
  {/* Example Event Card */}
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between gap-6">
    {/* Event Details */}
    <div className="flex-1">
      <p className="font-bold text-red-500 inline-flex items-center">
        <GoDotFill /> LIVE
      </p>
      <h3 className="text-lg md:text-xl">SUI BUILDATHON PORT-HARCOURT</h3>
      <div className="text-gray-600 inline-flex items-center mt-2">
        <img
          src={profilepics}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 hover:shadow-md transition"
        />
        <span className="ml-2">By Sui on Campus</span>
      </div>
      <div className="text-gray-600 mt-2">Google Meet</div>
      <button className="mt-4 px-4 py-2 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm md:text-lg font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m11.139 6.606 2.384-1.951a.904.904 0 0 1 1.477.7l-.009 5.322a.904.904 0 0 1-1.477.696l-2.375-1.951m-.003 1.21c.059 1.326-1.012 2.448-2.391 2.505-.102.004-5.054-.006-5.054-.006-1.373.104-2.574-.882-2.683-2.204-.008-.099-.006-5.413-.006-5.413-.06-1.328 1.009-2.452 2.389-2.511.103-.005 5.049.004 5.049.004 1.38-.102 2.584.891 2.691 2.22.007.095.005 5.404.005 5.404"
          ></path>
        </svg>
        Join Event
      </button>
    </div>

    {/* Event Image */}
    <div className="flex justify-center md:justify-end">
      <img src={image} alt="Event" className="w-[70%] md:w-[30%] rounded-lg" />
    </div>
  </div>
</div>
</main>
    </div>
  );
};

export default Dashboard;