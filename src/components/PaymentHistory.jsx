import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons

const PaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  // Sample user data (replace with your actual user data)
  const userData = [
    { id: 1, data: '1000', type: 'TX123456', record: 'Completed', downloads: '2024-04-18 10:30:00' },
    { id: 2, data: '500', type: 'TX123456', record: 'Pending', downloads: '2024-04-18 10:30:00' },
    { id: 3, data: '750', type: 'TX123456', record: 'Failed', downloads: '2024-04-18 10:30:00' },
    { id: 4, data: '1500', type: 'TX123456', record: 'Completed', downloads: '2024-04-18 10:30:00' },
    { id: 5, data: '6000', type: 'TX123456', record: 'Completed', downloads: '2024-04-18 10:30:00' },
    { id: 6, data: '2500', type: 'TX123456', record: 'Completed', downloads: '2024-04-18 10:30:00' },
    { id: 7, data: '500', type: 'TX123456', record: 'Failed', downloads: '2024-04-18 10:30:00' },
    { id: 8, data: '280', type: 'TX123456', record: 'Completed', downloads: '2024-04-18 10:30:00' },
    // Add more user data here
  ];

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-6 py-4 bg-white rounded-lg shadow-md" style={{ width: '130%', marginLeft:'-9rem' }}>
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
      <th className='w-1/4'>CREDIT</th>
      <th className='w-1/4'>TX_ID</th>
      <th className='w-1/4'>STATUS</th>
      <th className='w-1/4'>TIME</th>
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
  <div className={`py-2/3 px-2 w-3/5 text-center  rounded-full ${user.record === 'Completed' ? 'bg-green-100' : user.record === 'Pending' ? 'bg-yellow-100' : 'bg-red-100'}`}>
    {user.record}
  </div>
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
  );
};

export default PaymentHistory;
