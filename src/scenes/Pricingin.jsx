import React, { useState } from 'react';
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from '../components/Footer';

const Pricingin = () => {
  const [faqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };

  return (
    <>
      <Sidebar />
      <div className="mt-20">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-8 relative text-red-800 mt-10">
            <span className="absolute top-0 left-0 z-10 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Pricing Plans
            </span>
            Pricing Plans
          </h1>
          <p className="text-lg font-semibold mb-8 text-gray-700">Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs.</p>
          <h1 className="text-xl font-bold mb-8 relative text-green-800 mt-1">
            <span className="absolute top-0 left-0 z-10 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800">
              Save up to 10%
            </span>
            Save up to 10%
          </h1>
          <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <p className="text-xl mb-8">
                    {option.title}
                    {option.title === "650 Credit" && (
                      <span className="bg-gradient-to-r from-green-900 to-green-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (Popular)
                      </span>
                    )}
                    {option.title === "50000 Credit" && (
                      <span className="bg-gradient-to-r from-orange-200 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (VIP)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="text-4xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl bg-gradient-to-r from-red-700 to-red-400 border-orange-700 rounded-lg transition duration-200"
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Credit and Download Information</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-green-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">About Credit:</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>Credit in Domain search section is each download 1 credit.</li>
                <li>If a domain has 1 million emails, you must pay 1 credit for download.</li>
                <li>If a domain has 1 email, you must pay 1 credit for download.</li>
                <li>Search is free and does not require credits.</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">About Logs and Leak Section:</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>0-5000 result download = 1 credit.</li>
                <li>0-10,000 result download = 2 credits.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">FAQs</h2>
          <p className="text-lg mb-8 text-gray-600">Let us help answer the most common questions you might have.</p>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">How do I upgrade my plan?</h3>
            <p className="text-gray-700">To upgrade your plan, simply go to your account settings and choose the desired plan. Follow the instructions to complete the upgrade process.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">Is there a limit on the number of searches?</h3>
            <p className="text-gray-700">No, there is no limit on the number of searches you can perform. You can search as many times as you need without any restrictions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">How can I cancel my subscription?</h3>
            <p className="text-gray-700">To cancel your subscription, go to your account settings and choose the option to cancel subscription. Follow the instructions to complete the cancellation process.</p>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
};

export default Pricingin;
