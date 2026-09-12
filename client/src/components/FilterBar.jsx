
export default function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 max-w-4xl mx-auto my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Search Input */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Search PG</label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Type name or location..."
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Gender Filter */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Gender</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Genders</option>
            <option value="Boys">Boys Only</option>
            <option value="Girls">Girls Only</option>
          </select>
        </div>

        {/* Max Budget Filter */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Max Budget</label>
          <select
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="15000">Any Price</option>
            <option value="6000">Under ₹6,000</option>
            <option value="8000">Under ₹8,000</option>
            <option value="10000">Under ₹10,000</option>
          </select>
        </div>

        {/* Reset Button Slot */}
        <div className="flex items-end">
          <button
            onClick={() => setFilters({ search: "", gender: "All", maxPrice: "15000" })}
            className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl transition duration-200 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>

      </div>
    </div>
  );
}
