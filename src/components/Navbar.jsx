import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          SuiVents
        </div>

        {/* Mobile View: Connect Wallet and Menu Icon */}
        <div className="flex items-center space-x-2 md:hidden">
          <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 rounded-lg px-2 py-2 text-sm font-medium hover:bg-blue-50">
            <Wallet className="w-5 h-5 mr-1" />
            Connect Wallet
          </button>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition border-2 border-white px-2 py-1 rounded-[15px] hover:border-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-blue-600 transition">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-3 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 rounded-lg px-2 py-2 text-sm font-medium hover:bg-blue-50">
            <Wallet className="w-5 h-5 mr-1" />
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-md">
          <ul className="space-y-4 px-4 py-3 text-white font-medium">
            <li>
              <a href="#home" className="block hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="block hover:text-blue-600 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-blue-600 transition">
                Contact
              </a>
            </li>
            <div className="flex flex-col space-y-2">
              <button
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;