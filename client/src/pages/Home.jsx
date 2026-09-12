import React, { useState } from "react";
import PgCard from "../components/PgCard";
import FilterBar from "../components/FilterBar";
import { dummyPGs } from "../data";
import Testimonials from "../components/Testimonials";

function Home() {
  const [filters, setFilter] = useState({
    search: "",
    gender: "ALL",
    maxPrice: "1500",
  });

  const filteredPGs = dummyPGs.filter((pg) => {
    const matchesSearch =
      pg.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      pg.location.toLowerCase().includes(filters.search.toLowerCase());

    const matchesGender =
      filters.gender === "All" || pg.gender_type === filters.gender;

    const matchesPrice = pg.starting_price <= parseInt(filters.maxPrice);

    return matchesSearch && matchesGender && matchesPrice;
  });
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Find the Perfect <span className="text-blue-600">PG Living</span>{" "}
          Space
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          No brokerage. Verified listings. Smart amenities.
        </p>
      </div>
      <FilterBar filters={filters} setFilters={setFilter} />
      {/* Grid Listings */}
      {filteredPGs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPGs.map((pg) => (
            <PgCard key={pg.id} pg={pg} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200 max-w-xl mx-auto mt-8">
          <p className="text-gray-400 text-lg">
            No properties match your filter preferences.
          </p>
          <p className="text-sm text-gray-400">
            Try tweaking your search terms or clearing filters!
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
