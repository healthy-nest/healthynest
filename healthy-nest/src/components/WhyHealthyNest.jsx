import React from 'react';
import { ShieldCheck, Sliders, Handshake } from 'lucide-react';

const features = [
  {
    title: 'Verified Elder Homes',
    description:
      'All elder homes listed on Healthy Nest go through a strict manual verification process to ensure safety, cleanliness, staff qualification, and proper medical support for elders.',
    icon: <ShieldCheck className="w-9 h-9 text-green-700" />,
  },
  {
    title: 'Custom Care Filters',
    description:
      'Easily filter homes by location, budget, medical facilities, assisted living, dementia care, and many more personalized parameters that matter to your family.',
    icon: <Sliders className="w-9 h-9 text-green-700" />,
  },
  {
    title: 'Direct Provider Contact',
    description:
      'No middlemen. Get connected directly to the care providers via call or message to ask your questions, clarify services, or even schedule a visit without hassle.',
    icon: <Handshake className="w-9 h-9 text-green-700" />,
  },
];

const WhyHealthyNest = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Healthy Nest?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Choosing the right elder care home is important. We make it easier by offering tools and insights that put your loved one's comfort first.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FCFAF6] rounded-2xl shadow-sm p-6 text-left hover:shadow-md transition-shadow duration-200 border border-[#f5e6d3]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHealthyNest;
