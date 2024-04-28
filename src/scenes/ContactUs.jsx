import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2">
              <div className=" mb-8 md:mb-0 mr-8">
                <img src="https://www.pertemps.co.uk/Assets/LetsWorkTogether/lets-work-together_hero_mobile.png" alt="Attractive Image" className="rounded-lg " />
              </div>
              <div className="bg-gray-200 md:w-5/6 shadow-md rounded-lg p-6 mb-8 ml-8">

                <h2 className="text-xl font-semibold text-gray-700 mb-6">Contact Information</h2>
                <p className="text-sm text-gray-600">You can also reach us via the following methods:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Email: findemail.io@gmail.com</li>
                  <li>Phone: +1234567890</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8 mt-10">

                <h1 className="text-4xl font-bold text-red-500 mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text">Send a Message</h1>
                <p className="text-gray-600 mb-8">If you would like to discuss anything related to payment, account, licensing, partnerships, or have pre-sales questions, you’re at the right place.</p>
                <form>
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out">Send Message</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
};

export default ContactUs;
