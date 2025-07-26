// src/components/FeaturedHomes.jsx
import React from 'react';

const homes = [
  {
    name: 'Sunshine Elder Home',
    location: 'Jubilee Hills, Hyderabad',
    rating: 4.8,
    price: '₹18,000/month',
    tags: ['24/7 Medical', 'Veg Meals', 'Garden'],
    image: '/assets/images/sunshine.jpg', // Add the image to this path
  },
  {
    name: 'Shanti Elder Care',
    location: 'Banjara Hills, Hyderabad',
    rating: 4.6,
    price: '₹22,000/month',
    tags: ['Medical Staff', 'Yoga', 'Custom Diet'],
    image: '/assets/images/shanti.jpg',
  },
  {
    name: 'Aashirwad Senior Living',
    location: 'Kompally, Hyderabad',
    rating: 4.9,
    price: '₹15,000/month',
    tags: ['Doctor Visits', 'Library', 'Temple'],
    image: '/assets/images/aashirwad.jpg',
  },
];

const FeaturedHomes = () => {
  return (
    <section className="bg-[#FCFAF6] px-20 py-12">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Elder Care Homes</h2>
          <a href="#" className="text-green-700 text-sm font-medium hover:underline">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homes.map((home, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={home.image}
                alt={home.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{home.name}</h3>
                  <span className="text-yellow-500 font-medium">★ {home.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{home.location}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  {home.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-orange-600 text-sm font-semibold mb-2">
                  Starts at {home.price}
                </p>
                <a href="#" className="text-green-600 text-sm font-medium hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-8">
          <button className="border border-green-500 text-green-600 px-6 py-2 rounded-full hover:bg-green-50">
            Add to Compare
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedHomes;
