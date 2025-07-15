import { Search, Filter } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="bg-white p-4 shadow mt-4 mx-4 rounded-lg">
      <h3 className="text-md font-semibold text-gray-700 mb-2">
        Find Trusted Elder Care Options Near You
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Search by home name, city, or area"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">City</span>
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Care Type</span>
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">Budget</span>
        <span className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Filter className="w-4 h-4" /> More Filters
        </span>
      </div>

      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow">
        Show Results <span className="text-sm text-white/70">(0 homes found)</span>
      </button>
    </section>
  );
}
