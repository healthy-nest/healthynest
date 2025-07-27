import React from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import this

const SearchBar = () => {
  const navigate = useNavigate(); 

  return (
    <section className="relative z-10 -mt-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
        {/* Area/Landmark Search */}
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 rounded-full px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by area or landmark"
            className="bg-transparent w-full focus:outline-none text-sm"
          />
        </div>

        {/* Select City Dropdown */}
        <div className="relative w-full max-w-xs">
          <select className="appearance-none w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Select City</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Chennai</option>
          </select>

          {/* Dropdown icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
      </div>


        {/* Advanced Filters Button */}
        <div className="w-full md:w-auto">
          <button
            className="flex items-center gap-2 border border-green-700 text-green-700 rounded-full px-5 py-2 text-sm hover:bg-green-700 hover:text-white transition"
            onClick={() => navigate("/healthynest/explore-nests")}
          >
            <FaSlidersH />
            Advanced Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
