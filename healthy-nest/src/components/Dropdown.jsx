// components/SortDropdown.jsx
import React from "react";

const SortDropdown = () => {
  return (
    <div className="mb-4 text-right">
      <label className="text-sm text-gray-600 mr-2">Sort by:</label>
      <select className="border px-2 py-1 rounded">
        <option>Recommended</option>
        <option>Lowest Price</option>
        <option>Highest Rated</option>
      </select>
    </div>
  );
};

export default SortDropdown;
