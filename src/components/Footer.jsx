import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <img className="h-16 w-32 mx-auto md:mx-0 mb-4" src={logo} alt="Logo" />
        <p className="text-base text-left mb-4">Find email addresses in seconds.</p>
        <p className="text-sm mb-4">Subscribe to newsletter</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Your Email address"
            className="border border-orange-600 rounded-md px-4 py-2 w-full max-w-md mr-2"
          />
          <button className="bg-red-700 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-gray-700 text-sm font-semibold mb-2">Site</h3>
          <div className="flex flex-wrap">
            <span className="text-gray-300 bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Home</span>
            <span className="text-gray-300 bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">About</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-gray-700 text-sm font-semibold mb-2">Pages</h3>
          <div className="flex flex-wrap">
            <span className="text-gray-300 bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">FAQ</span>
            <span className="text-gray-300 bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Services</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Pricing</span>
          <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Blog</span>
          <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Telegram</span>
          <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Login</span>
          <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
