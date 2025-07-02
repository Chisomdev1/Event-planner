import React from "react";
import { FaEnvelope, FaStar, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 px-2 border-t border-zinc-700">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left nav links */}
        <div className="flex space-x-6 text-sm">
          <span className="cursor-pointer hover:text-white">✨ What's New</span>
          <span className="cursor-pointer hover:text-white">Discover</span>
          <span className="cursor-pointer hover:text-white">Pricing</span>
          <span className="cursor-pointer hover:text-white">Help</span>
        </div>


        {/* Right icons */}
        <div className="flex space-x-4 text-lg">
          <FaEnvelope className="hover:text-white cursor-pointer" />
          <FaStar className="hover:text-white cursor-pointer" />
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
