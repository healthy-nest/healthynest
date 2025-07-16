import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FilterSideBar from "../components/FilterSideBar";
import allHomes from "../data/ElderHomes";
import ElderHomeCard from "../components/ElderHomeCard";
import Footer from "../components/Footer";
import { useState } from "react";


export default function HomePage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // Only this state drives the results
  const [filters, setFilters] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 50000,
    careType: [],
  });
  // This is used for both desktop and mobile as staged filters
  const [pendingFilters, setPendingFilters] = useState(filters);

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const handleClearAll = () => {
    setSearchValue("");
    setPendingFilters({ location: "", minPrice: 0, maxPrice: 50000, careType: [] });
    setPage(1);
  };

  // When filters change (after apply), update pendingFilters to match
  // so sidebar always shows current filters
  React.useEffect(() => {
    setPendingFilters(filters);
    setPage(1);
  }, [filters, searchValue]);
  const handleCompare = () => {
    // TODO: Compare logic
  };

  // Filtering logic
  const filteredHomes = allHomes.filter((home) => {
    // Search
    if (searchValue.trim()) {
      const keyword = searchValue.trim().toLowerCase();
      if (
        !(
          (home.name && home.name.toLowerCase().includes(keyword)) ||
          (home.city && home.city.toLowerCase().includes(keyword)) ||
          (home.area && home.area.toLowerCase().includes(keyword)) ||
          (home.location && home.location.toLowerCase().includes(keyword))
        )
      ) {
        return false;
      }
    }
    // Location
    if (filters.location && home.city !== filters.location) return false;
    // Price range
    const priceNum = Number(home.price.replace(/[^\d]/g, ""));
    if (typeof filters.minPrice === 'number' && priceNum < filters.minPrice) return false;
    if (typeof filters.maxPrice === 'number' && priceNum > filters.maxPrice) return false;
    // Care Type
    if (filters.careType.length > 0) {
      if (!filters.careType.some(type => home.tags && home.tags.includes(type))) return false;
    }
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredHomes.length / pageSize);
  const paginatedHomes = filteredHomes.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearch={(val) => setSearchValue(val)}
      />

      <main className="flex flex-col lg:flex-row gap-6 px-2 sm:px-4 mt-4 max-w-7xl mx-auto">
        {/* Sidebar for desktop */}
        {/* Sidebar for desktop only, using pendingFilters */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="bg-white rounded-lg shadow p-4 sticky top-24">
            <FilterSideBar
              filters={pendingFilters}
              setFilters={setPendingFilters}
              onClear={handleClearAll}
              onApply={() => setFilters(pendingFilters)}
            />
          </div>
        </aside>

        {/* Main content area */}
        <section className="flex-1">
          {/* Mobile filter + sort controls */}
          <div className="lg:hidden flex justify-between items-center mb-3">
            <div className="flex gap-2">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="border text-sm px-3 py-2 rounded shadow bg-white"
              >
                🧰 Filters
              </button>
              <button onClick={handleClearAll} className="text-xs text-green-600 px-2 py-2">Clear All</button>
            </div>
            <select className="border text-sm px-3 py-2 rounded shadow bg-white">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          {/* Results count and sort for desktop */}

          <div className="hidden lg:flex justify-between items-center mb-3">
            <h2 className="text-md font-semibold text-gray-700">
              {filteredHomes.length} Elder Care Homes Found
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border text-sm px-3 py-2 rounded shadow bg-white">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Results count for mobile */}
          <div className="lg:hidden mb-2">
            <h2 className="text-md font-semibold text-gray-700">
              {filteredHomes.length} Elder Care Homes Found
            </h2>
          </div>

          {/* Elder home cards */}
          <div className="flex flex-col gap-4">
            {paginatedHomes.map((home, index) => (
              <ElderHomeCard key={index} home={home} />
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Prev
              </button>
              <span className="text-sm">Page {page} of {totalPages}</span>
              <button
                className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer/>
      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ❌
            </button>
            <h2 className="font-semibold text-gray-700 mb-3">Filters</h2>
            <FilterSideBar
              filters={pendingFilters}
              setFilters={setPendingFilters}
              onClear={() => setPendingFilters({ location: "", cost: [], careType: [] })}
              onApply={() => {
                setFilters(pendingFilters);
                setShowMobileFilters(false);
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}

