export default function FilterSideBar({ filters, setFilters, onClear, onApply }) {
  const handleLocation = (e) => setFilters(f => ({ ...f, location: e.target.value }));
  const handleMinPrice = (e) => setFilters(f => ({ ...f, minPrice: Number(e.target.value) }));
  const handleMaxPrice = (e) => setFilters(f => ({ ...f, maxPrice: Number(e.target.value) }));
  const handleCareType = (type) => setFilters(f => {
    const arr = f.careType.includes(type)
      ? f.careType.filter(t => t !== type)
      : [...f.careType, type];
    return { ...f, careType: arr };
  });
  return (
    <div className="w-72 p-4 bg-white rounded shadow h-fit">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800">Filters</h2>
        <button className="text-sm text-green-600" onClick={onClear}>Clear All</button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Location</label>
        <select className="w-full border px-3 py-2 rounded text-sm" value={filters.location} onChange={handleLocation}>
          <option value="">All Locations</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Warangal">Warangal</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Monthly Cost (₹)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            max={100000}
            step={500}
            value={filters.minPrice ?? 0}
            onChange={handleMinPrice}
            className="w-20 border px-2 py-1 rounded text-sm"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            min={0}
            max={100000}
            step={500}
            value={filters.maxPrice ?? 50000}
            onChange={handleMaxPrice}
            className="w-20 border px-2 py-1 rounded text-sm"
            placeholder="Max"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Care Type</label>
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" checked={filters.careType.includes('Assisted Living')} onChange={() => handleCareType('Assisted Living')} /> Assisted Living</label>
          <label><input type="checkbox" checked={filters.careType.includes('Dementia Care')} onChange={() => handleCareType('Dementia Care')} /> Dementia Care</label>
          <label><input type="checkbox" checked={filters.careType.includes('Short Stay')} onChange={() => handleCareType('Short Stay')} /> Short Stay</label>
          <label><input type="checkbox" checked={filters.careType.includes('Long-term Care')} onChange={() => handleCareType('Long-term Care')} /> Long-term Care</label>
        </div>
      </div>
      {/* Add more filters later as needed */}
      <button
        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        type="button"
        onClick={onApply}
      >
        Apply Filters
      </button>
    </div>
  );
}
