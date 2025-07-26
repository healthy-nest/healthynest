// src/components/Categories.jsx
import React from 'react';
import { HeartPulse, Leaf, Users, ShieldCheck, Utensils } from 'lucide-react';

const categories = [
  { name: 'Medical Care', icon: <HeartPulse className="w-6 h-6" /> },
  { name: 'Spiritual Comfort', icon: <Leaf className="w-6 h-6" /> },
  { name: 'Social Community', icon: <Users className="w-6 h-6" /> },
  { name: 'Security & Safety', icon: <ShieldCheck className="w-6 h-6" /> },
  { name: 'Diet & Nutrition', icon: <Utensils className="w-6 h-6" /> },
];

const Categories = () => {
  return (
    <section className="bg-[#FCFAF6] py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-10">Explore by Category</h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition w-full"
        >
          <div className="text-green-600 text-2xl">{cat.icon}</div>
          <span className="text-sm font-medium text-gray-700">{cat.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Categories;
