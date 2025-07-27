import { useLocation } from "react-router-dom";
import { useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import ExploreHero from "../components/ExploreHero";
import Dropdown from "../components/Dropdown";
import ElderNestCard from "../components/ElderNestCard";

// Mocked data for homes
const mockCards = [
  {
  name: "Serenity Elder Care",
  location: "Hyderabad, Telangana",
  price: 25000,
  features: ["24/7 Care", "Wheelchair Access", "Personal Nurse"],
  description: "A premium elder care home with top-notch medical facilities and daily activities.",
  verified: true,
  rating: 4.5
}
,
  {
    name: "Serenity Elder Home",
    location: "Jubilee Hills, Hyderabad",
    features: ["24x7 Medical", "Veg Meals", "Garden", "Accessibility"],
    description: "Premium care services with specialized dementia support...",
    price: "15,500",
  },
  {
    name: "Golden Years Care",
    location: "Warangal",
    features: ["24x7 Medical", "Religious Space", "Veg Meals", "NGO Run"],
    description: "An NGO-run facility providing traditional home-cooked meals...",
    price: "9,800",
  },
];

const ExploreNests = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const source = params.get("source");

  console.log("Navigated from:", source);

  // You can use this to conditionally show filters, for example:
  const showFilters = source !== "quick-view";

  return (
    <>
      <ExploreHero />
    <div className="max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
        {showFilters && <FiltersSidebar />}
        <main className="flex-1 py-4">
          <Dropdown />

          <div className="space-y-4">
            {mockCards.map((card, idx) => (
              <ElderNestCard key={idx} data={card} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded border hover:bg-gray-200">
              Load More Homes
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ExploreNests;
