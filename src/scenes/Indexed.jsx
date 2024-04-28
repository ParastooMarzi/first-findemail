import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { FiSearch } from 'react-icons/fi';

const Indexed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  // Sample user data (replace with your actual user data)
  const userData = [
    { id: 1, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 2, data: 'rinafashion.com', type: '85,692', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 3, data: 'example.com', type: '45,231', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 4, data: 'new logs', type: '58974551', record: 'Domain database', downloads: '2024-04-18 10:30:00' },
    { id: 5, data: 'example2.com', type: '102,543', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 6, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 7, data: 'testsite.com', type: '36,782', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 8, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 9, data: 'example3.com', type: '75,918', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 10, data: 'new logs', type: '58974551', record: 'Domain database', downloads: '2024-04-18 10:30:00' },
    { id: 11, data: 'testsite2.com', type: '24,895', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 12, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 13, data: 'example4.com', type: '65,412', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 14, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 15, data: 'testsite3.com', type: '18,327', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 16, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 17, data: 'example5.com', type: '93,257', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 18, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 19, data: 'testsite4.com', type: '56,891', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 20, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 21, data: 'example6.com', type: '123,908', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 22, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 23, data: 'testsite5.com', type: '47,621', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 24, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 25, data: 'example7.com', type: '82,154', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 26, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 27, data: 'testsite6.com', type: '35,926', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 28, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' },
    { id: 29, data: 'example8.com', type: '59,783', record: 'Leak database', downloads: '2024-04-18 10:30:00' },
    { id: 30, data: 'new logs', type: '58974551', record: 'Logs database', downloads: '2024-04-18 10:30:00' }
  ];

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Sidebar />
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-8 relative text-red-800 mt-10">
            <span className="absolute top-0 left-0 z-10 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            Latest Indexed Breaches
            </span>
            Latest Indexed Breaches
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-10">
      <div className="grid grid-cols-8 items-center mb-4">

{/* Row number selector */}
<div className="flex items-center mt-4"> {/* Removed justify-end */}
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

{/* Search input */}
<div className="relative flex items-center justify-end"> {/* Added justify-end */}
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
      <th className='w-1/4'>DATABASE NAME</th>
      <th className='w-1/4'>RECORDS</th>
      <th className='w-1/4'>TYPE</th>
      <th className='w-1/4'>DATE</th>
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
                <td className={` border-b text-center border-gray-300 ${index === currentRows.length - 1 ? '' : 'pb-2'}`}>
          <div className={`${user.record === 'Domain database' ? 'bg-blue-100' : user.record === 'Leak database' ? 'bg-orange-100' : 'bg-green-100'} rounded-full p-3/4  w-2/3`}>
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

      <div className="max-w-8xl mx-auto px-6">
        <Footer />
      </div>
    </>
  )
}

export default Indexed
