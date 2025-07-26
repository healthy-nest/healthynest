import { useState } from "react";

export default function HeroSection({ searchValue, setSearchValue, onSearch }) {
  const [input, setInput] = useState(searchValue || "");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (setSearchValue) setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(input);
  };

  return (
    <section className="bg-[#fcfcfa] py-10 px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mx-auto">
        Empowering Families with Better Elder Care Choices
      </h1>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Compare verified elder care homes and services in your city.
      </p>

      <form
        className="mt-6 flex flex-col md:flex-row gap-3 justify-center items-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search by city, area, or name"
          className="w-full md:w-96 border px-3 py-2 rounded shadow-sm"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-sm"
        >
          Search
        </button>
      </form>

      <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded shadow">
        Explore Homes
      </button>

      <div className="mt-6 w-full max-w-xl mx-auto h-40 md:h-48 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
          alt="Indian family smiling together"
          className="object-cover w-full h-full rounded"
          style={{ minHeight: '100px' }}
        />
      </div>
    </section>
  );
}
