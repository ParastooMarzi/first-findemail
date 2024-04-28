import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { BiSearch } from 'react-icons/bi';
import Footer from '../components/Footer';
import { FaCube, FaEnvelope, FaEnvelopeOpenText, FaUserFriends } from 'react-icons/fa';
import { IoPeopleOutline, IoCubeOutline } from 'react-icons/io5';
import { IoCashOutline } from 'react-icons/io5';
import { RiInformationLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardItem icon={<FaEnvelopeOpenText className="text-4xl text-purple-500 mb-2" />} title="Leaks" value="44K" />
      <CardItem icon={<FaUserFriends className="text-4xl text-blue-500 mb-2" />} title="Searches" value="52K" />
      <CardItem icon={<FaCube className="text-4xl text-green-500 mb-2" />} title="Found" value="1.423K" />
      <CardItem icon={<RiMoneyDollarCircleLine className="text-4xl text-yellow-500 mb-2" />} title="Downloads" value="4496" />
    </div>
  );
};

const CardItem = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 bg-gray-200">
      {icon}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const AdditionalInsights = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Insight icon={<RiInformationLine className="text-4xl text-pink-500" />} title="Insight 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Insight icon={<RiInformationLine className="text-4xl text-pink-500" />} title="Insight 2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Insight icon={<RiInformationLine className="text-4xl text-pink-500" />} title="Insight 3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </div>
  );
};

const Insight = ({ icon, title, text }) => {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const Filter = () => {
  const [filters, setFilters] = useState({
    domain: true,
    username: false,
    email: false,
    phone: false,
    ipaddress: false,
  });

  const toggleCheckbox = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <div className="flex flex-wrap items-center space-x-6 mb-4">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={filters.domain}
          onChange={() => toggleCheckbox('domain')}
        />
        <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-colors duration-300 ${filters.domain ? 'bg-green-500 border-transparent' : 'bg-white'}`}>
          {filters.domain && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">Domain</span>
      </label>

      {/* Similar structure for other filters */}

      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={filters.username}
          onChange={() => toggleCheckbox('username')}
        />
        <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-colors duration-300 ${filters.username ? 'bg-green-500 border-transparent' : 'bg-white'}`}>
          {filters.username && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">Username</span>
      </label>

      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={filters.email}
          onChange={() => toggleCheckbox('email')}
        />
        <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-colors duration-300 ${filters.email ? 'bg-green-500 border-transparent' : 'bg-white'}`}>
          {filters.email && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">Email</span>
      </label>

      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={filters.phone}
          onChange={() => toggleCheckbox('phone')}
        />
        <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-colors duration-300 ${filters.phone ? 'bg-green-500 border-transparent' : 'bg-white'}`}>
          {filters.phone && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">Phone Number</span>
      </label>

      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={filters.ipaddress}
          onChange={() => toggleCheckbox('ipaddess')}
        />
        <div className={`w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-colors duration-300 ${filters.ipaddess ? 'bg-green-500 border-transparent' : 'bg-white'}`}>
          {filters.ipaddess && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 8.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">IP Address</span>
      </label>
    </div>
  );
};
const SearchLeak = () => {
  return (
    <>
      <Sidebar />

      <div className="flex">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-8 relative text-red-800 mt-10">
            <span className="absolute top-0 left-0 z-10 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Leak Database
            </span>
            Leak Database
          </h1>
          <p className="text-lg font-semibold mb-8 text-gray-700">Search in Leak Database.[ Record : 5,210,760,041 ]</p>
          <Filter />
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mb-8 mt-8">
            <input
              type="text"
              placeholder="Search for a domain, name ,Emai..."
              className="flex-1 outline-none mr-4 py-2 px-4 rounded-md w-96" // Increased padding and rounded corners
            />
            <button className="bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
              <BiSearch className="mr-2" />
              Search
            </button>
          </div>
          <Card />
          <AdditionalInsights />
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
};

export default SearchLeak;
