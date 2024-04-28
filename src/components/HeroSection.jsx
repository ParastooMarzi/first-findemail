import { useState } from 'react';
import { Input } from "postcss";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [searchType, setSearchType] = useState("domain"); // Default search type

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">
        Find
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          email addresses
        </span> from any company
      </h1>
      <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl">

      </p>

      <div className="flex justify-center my-10">
        <button
          onClick={() => handleSearchTypeChange("domain")}
          className={`py-3 px-4 mx-3 rounded-md ${searchType === 'domain' ? 'bg-gradient-to-r from-red-500 to-orange-800 text-white' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-gray-100'}`}
        >
          Domain Search
        </button>
        <button
          onClick={() => handleSearchTypeChange("leak")}
          className={`py-3 px-4 mx-3 rounded-md ${searchType === 'leak' ? 'bg-gradient-to-r from-red-500 to-orange-800 text-white' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-gray-100'}`}
        >
          Leak Search
        </button>
        <button
          onClick={() => handleSearchTypeChange("logs")}
          className={`py-3 px-4 mx-3 rounded-md ${searchType === 'logs' ? 'bg-gradient-to-r from-red-500 to-orange-800 text-white' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-gray-100'}`}
        >
          Logs Search
        </button>
      </div>
      <p className="mt-2 text-lg text-center text-neutral-500 max-w-4xl">
        Find email addresses from any company
      </p>
      <div className="w-98 flex justify-center my-10">

        <input
          type="text"
          placeholder={`Enter a ${searchType === 'domain' ? 'Domain' : (searchType === 'leak' ? 'Leak' : 'Logs')} Name`}
          className="py-3 px-4 w-100 sm:w-96  rounded-md border border-neutral-300 focus:border-orange-500 focus:outline-none"
        />
        <button className="bg-gradient-to-r from-red-500 to-orange-800 text-white py-3 px-8 ml-4 rounded-md">
          Search
        </button>
      </div>


      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
