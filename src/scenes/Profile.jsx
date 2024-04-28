import React, { useState } from 'react';
import { FaUser, FaLock, FaHistory, FaEnvelope, FaKey, FaClock, FaCalendarAlt, FaCreditCard } from 'react-icons/fa'; // Import FaEnvelope
import AccountInformation from '../components/AccountInformation';
import SecuritySettings from '../components/SecuritySettings';
import PaymentHistory from '../components/PaymentHistory';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


const Profile = () => {
  const [activeTable, setActiveTable] = useState('account');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleClick = (table) => {
    setActiveTable(table);
  };

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  // Data for the details section
  const userDetails = {
    username: 'Parastoo Marzi',
    email: 'parastoomarzi1998@gmail.com',
    status: 'Active',
    role: 'Buyer',
    totalSearch: 5,
    credit: 0,
    registerDate: '2024/04/06 06:12',
    lastLogin: '2024-04-15 09:55',
    apiKey: '8bec6cd8-74b9-485e-a439-50f650793cf2'
  };

  return (
    <>
      <Sidebar />

      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2">
            {/* Profile Image and Details */}
            <div className="p-2 w-full bg-white sm:col-span-1 rounded-md shadow-md">
  <div className="flex flex-col items-left justify-center">
    <label htmlFor="profile-photo" className="cursor-pointer">
      <input type="file" id="profile-photo" accept="image/*" className="hidden" onChange={handlePhotoChange} />
      <img className="w-32 h-32 rounded-full mb-4 border-4 border-white hover:border-red-400" src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="Profile" />
    </label>
  </div>
  <div className="px-6 py-4">
    {/* Details section */}
    <div className="text-gray-700">
      <p className="text-lg font-semibold mb-4">User Details</p>
      <div className="flex items-center mb-2">
  <FaUser className="mr-2 text-gradient-from-red-to-orange"  />
  <span className="text-sm font-semibold">Username:</span>
  <span className="ml-1">{userDetails.username}</span>
</div>
<div className="flex items-center mb-2">
  <FaEnvelope className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Email:</span>
  <span className="ml-1">{userDetails.email}</span>
</div>
<div className="flex items-center mb-2">
  <FaLock className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Status:</span>
  <span className="ml-1">{userDetails.status}</span>
</div>
<div className="flex items-center mb-2">
  <FaUser className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Role:</span>
  <span className="ml-1">{userDetails.role}</span>
</div>
<div className="flex items-center mb-2">
  <FaHistory className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Total Searches:</span>
  <span className="ml-1">{userDetails.totalSearch}</span>
</div>
<div className="flex items-center mb-2">
  <FaCreditCard className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Credit:</span>
  <span className="ml-1">{userDetails.credit}</span>
</div>
<div className="flex items-center mb-2">
  <FaCalendarAlt className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Register Date:</span>
  <span className="ml-1">{userDetails.registerDate}</span>
</div>
<div className="flex items-center mb-2">
  <FaClock className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">Last Login:</span>
  <span className="ml-1">{userDetails.lastLogin}</span>
</div>
<div className="flex items-center mb-2">
  <FaKey className="mr-2 text-gradient-from-red-to-orange" />
  <span className="text-sm font-semibold">API Key:</span>
  <span className="ml-1">{userDetails.apiKey}</span>
</div>

    </div>
    </div>
    </div>
{/* Active Table */}
<div className="sm:col-span-1"> {/* Adjust col-span for active table */}
  <div className="flex justify-left mt-4">
    <button
      onClick={() => handleClick('account')}
      className={`mx-2 py-2 px-6 rounded-md ${activeTable === 'account' ? 'bg-gradient-to-r from-red-500 to-red-800 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
    >
      Account
    </button>
    <button
      onClick={() => handleClick('security')}
      className={`mx-2 py-2 px-6 rounded-md ${activeTable === 'security' ? 'bg-gradient-to-r from-red-500 to-red-800 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
    >
      Security
    </button>
    <button
      onClick={() => handleClick('payment')}
      className={`mx-2 py-2 px-6 rounded-md ${activeTable === 'payment' ? 'bg-gradient-to-r from-red-500 to-red-800 text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
    >
      Payment History
    </button>
  </div>
  <div className="p-6">
    {activeTable === 'account' && <AccountInformation />}
    {activeTable === 'security' && <SecuritySettings />}
    {activeTable === 'payment' && <PaymentHistory />}
    {/* Render other tables based on activeTable */}
  </div>
</div>

</div>

        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
