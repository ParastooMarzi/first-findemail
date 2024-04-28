import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const AccountInformation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const userData = [
    { id: 1, data: 'user1@example.com', type: 'Domain Database', record: '0', downloads: 'No' },
    { id: 2, data: 'user1@example.com', type: 'Logs Database', record: '1', downloads: 'Yes' },
    { id: 3, data: 'user2@example.com', type: 'Domain Database', record: '2', downloads: 'Yes' },
    { id: 4, data: 'user2@example.com', type: 'Leak Database', record: '3', downloads: 'No' },
    { id: 5, data: 'user3@example.com', type: 'Logs Database', record: '4', downloads: 'Yes' },
    { id: 6, data: 'user4@example.com', type: 'Domain Database', record: '5', downloads: 'No' },
    { id: 7, data: 'user5@example.com', type: 'Leak Database', record: '6', downloads: 'Yes' },
    { id: 8, data: 'user6@example.com', type: 'Logs Database', record: '7', downloads: 'No' },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow-md" style={{ width: '130%', marginLeft: '-9rem' }}>
      <h2 className="text-xl font-semibold text-gray-800">User Search List</h2>
      <div className="flex justify-between items-center mb-4">
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
      <table className="w-full text-left mt-10">
        <thead style={{ borderBottom: '30px solid transparent' }}>
          <tr className="border-b border-gray-300">
            <th className="w-2/6">Data</th>
            <th className="w-2/6">Type</th>
            <th className="w-1/6">Record</th>
            <th className="w-1/6">Downloads</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((user, index) => (
            <tr key={user.id}>
              <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                {user.data}
              </td>
              <td className={`border-b text-center border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                <div className={`${user.type === 'Domain Database' ? 'bg-blue-100' : user.type === 'Leak Database' ? 'bg-orange-100' : 'bg-green-100'} rounded-full p-3/4  w-2/3`}>
                  {user.type}
                </div>
              </td>
              <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                {user.record}
              </td>
              <td className={`border-b border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
                <div className={`py-3/4 w-1/3 px-2 rounded-full text-white ${user.downloads === 'Yes' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {user.downloads}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default AccountInformation;
