import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const SecuritySettings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userData = [
    { id: 1, data: 'Chrome on Windows', type: 'HP Spectre 360', record: 'Switzerland', downloads: '10, July 2021 20:07' },
    { id: 2, data: 'Chrome on iPhone', type: 'iPhone 12x', record: 'Australia', downloads: '10, July 2021 20:07' },
    { id: 3, data: 'Chrome on Android', type: 'Oneplus 9 Pro', record: 'Dubai', downloads: '10, July 2021 20:07' },
    { id: 4, data: 'Chrome on MacOS', type: 'Apple iMac', record: 'India', downloads: '10, July 2021 20:07' },
    { id: 5, data: 'Chrome on Windows', type: 'HP Spectre 360', record: 'Switzerland', downloads: '10, July 2021 20:07' },
    { id: 6, data: ' Chrome on Android', type: 'Oneplus 9 Pro', record: 'Dubai', downloads: '10, July 2021 20:07' },
    { id: 7, data: ' Chrome on Android', type: 'Oneplus 9 Pro', record: 'Dubai', downloads: '10, July 2021 20:07' },
    { id: 8, data: ' Chrome on Android', type: 'Oneplus 9 Pro', record: 'Dubai', downloads: '10, July 2021 20:07' },
    // Add more user data here
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '130%', marginLeft:'-9rem' }}>
      <div className="px-6 py-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Settings</h2>
        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter new password"
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              className="absolute top-2 right-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-orange-600 focus:outline-none">
          Change Password
        </button>
      </div>
      <div className="px-6 py-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">User Search List</h2>
        <div className="flex justify-between items-center mb-4">

          {/* Row number selector */}
          <div className="flex items-center justify-end mt-4">
            <span className="mr-2">Rows per page:</span>
            <select
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

        </div>

        {/* Render table */}
        <table className="w-full text-left mt-10">
          <thead style={{ borderBottom: '30px solid transparent' }}> {/* Add transparent border to create space */}
            <tr className='border-b border-gray-300'>
              <th className='w-1/4'>BROWSER</th>
              <th className='w-1/4'>DEVICE</th>
              <th className='w-1/4'>LOCATION</th>
              <th className='w-1/4'>RECENT ACTIVITIES</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((user, index) => (
              <tr key={user.id}>
                <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-3'}`}>
                  {user.data}
                </td>
                <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                    {user.type}
                </td>
                <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                  {user.record}
                </td>
                <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>

                    {user.downloads}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10">
          <div>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 mr-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastRow >= userData.length}
              className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none"
            >
              Next
            </button>
          </div>
          <div>
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, userData.length)} of {userData.length} entries
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecuritySettings;
