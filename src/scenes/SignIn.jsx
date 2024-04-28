import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignIn = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };

  const redirectToPannel = () => {
    navigate("/domain-search");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-12 bg-gray-50">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center">Welcome to FindEmail!</h2>
          <p className="text-gray-500 text-center mb-6">Please sign in to your account and start the adventure.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email or Username</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <a href="#" className="text-sm text-gray-500 hover:text-red-500">Forgot password?</a>
              </div>
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
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-gray-700">Remember me</label>
            </div>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={redirectToHome}
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                onClick={redirectToPannel}
                type="submit"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 text-center">New on our platform? <a href="#" className="text-red-500 hover:underline">Create an account</a></p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
