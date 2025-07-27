// components/SearchHero.jsx
import React from "react";

const SearchHero = () => {
  return (
    <div className="bg-[#faf9f6] py-12 text-center">
      <h1 className="text-3xl font-semibold text-gray-800">
        Empowering Families with Better Elder Care Choices
      </h1>
      <p className="mt-2 text-gray-600">Compare verified elder care homes and services in your city.</p>
      <div className="mt-6 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search by city, area, or name"
          className="px-4 py-2 border border-gray-300 rounded-md w-72"
        />
        <select className="px-2 py-2 border border-gray-300 rounded-md">
          <option>Select City</option>
          <option>Hyderabad</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Search</button>
      </div>
      <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md">Explore Homes</button>
    </div>
  );
};

export default SearchHero;
