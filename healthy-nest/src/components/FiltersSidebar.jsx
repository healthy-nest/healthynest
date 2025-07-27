import React, { useState } from "react";

const FilterButton = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
      selected
        ? "bg-black text-white border-black shadow-md"
        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const FilterSection = ({ title, children }) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">{title}</label>
    {children}
  </div>
);

const FiltersSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggle = (section, option) => {
    setSelectedFilters((prev) => {
      const arr = prev[section] || [];
      const already = arr.includes(option);
      return {
        ...prev,
        [section]: already ? arr.filter((o) => o !== option) : [...arr, option],
      };
    });
  };

  // Full list of filter options per design screenshot
  const filterOptions = {
    monthlyCost: ["₹0‑5K", "₹5‑10K", "₹10‑15K", "₹15K+"],
    careType: ["Assisted Living", "Dementia Care", "Short Stay", "Long‑term", "Memory Care"],
    medicalSupport: ["24x7 Staff", "Doctor on Call", "Nurse Available", "Emergency Services"],
    foodType: ["Veg Only", "Veg + Non‑Veg", "Home‑cooked", "Diet‑Specific"],
    amenities: ["Garden", "Religious Activities", "Visitors Allowed", "WiFi", "Transportation"],
    ownershipType: ["NGO", "Private", "Religious Trust", "Government"]
  };

  return (
    <aside className="w-full md:w-72 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>

      {Object.entries(filterOptions).map(([section, options]) => (
        <FilterSection
          key={section}
          title={section
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
          }
        >
          <div className="flex flex-wrap gap-2">
            {options.map((opt) => (
              <FilterButton
                key={opt}
                label={opt}
                selected={(selectedFilters[section] || []).includes(opt)}
                onClick={() => toggle(section, opt)}
              />
            ))}
          </div>
        </FilterSection>
      ))}

      <div className="mt-6">
        <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700">
          Compare ({Object.values(selectedFilters).flat().length})
        </button>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
