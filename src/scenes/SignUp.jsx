import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-12 bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center">Adventure starts here 🚀</h2>
          <p className="text-gray-500 text-center mb-6">Make your app management easy and fun!</p>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Your username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Your password"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="agree" className="ml-2 text-gray-700">I agree to <a href="#" className="text-red-500 hover:underline">privacy policy & terms</a></label>
            </div>
            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={redirectToHome}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 text-center">Already have an account? <a href="./signin" className="text-red-500 hover:underline">Sign in instead</a></p>
        </div>

      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
