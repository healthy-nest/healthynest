import React from 'react';

const testimonials = [
  {
    name: 'Rahul Mehta',
    text: 'HealthyNest made it easy to find the best care for my parents.',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
  },
  {
    name: 'Sonal Kapoor',
    text: 'Great platform to compare elder care services and make informed decisions.',
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 4,
  },
  {
    name: 'Anita Rao',
    text: 'The support and transparency offered by HealthyNest is unmatched.',
    image: 'https://i.pravatar.cc/100?img=8',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1 mb-3">
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${idx < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill={idx < rating ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.75.75 0 011.04 0l2.586 2.621a.75.75 0 00.563.215l3.535-.12a.75.75 0 01.47 1.347l-2.718 2.422a.75.75 0 00-.24.674l.686 3.64a.75.75 0 01-1.1.79l-3.045-1.715a.75.75 0 00-.736 0l-3.045 1.714a.75.75 0 01-1.1-.79l.686-3.64a.75.75 0 00-.24-.673l-2.718-2.422a.75.75 0 01.47-1.348l3.535.12a.75.75 0 00.563-.214L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-12">What Families Say</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#FCFAF6] rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <StarRating rating={t.rating} />
            <p className="text-gray-700 italic mb-3">"{t.text}"</p>
            <p className="font-semibold text-green-700">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
