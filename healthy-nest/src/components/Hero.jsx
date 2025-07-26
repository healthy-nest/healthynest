// src/components/Hero.jsx
import React from 'react';
import Container from './Container';
import heroImg from '../assets/images/hero-family.jpg'; // Ensure the image exists

const Hero = () => {
  return (
    <section className="bg-[#FCFAF6] py-16">
      <div className={`max-w-screen-xl mx-auto px-4 md:px-5`}>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Families with <br /> Better Elder Care Choices
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Explore verified senior homes with medical support, comfort, and emotional warmth.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition">
                Start Comparing Homes
              </button>
              <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Talk to an Expert
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✔</span> Verified Listings
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">👪</span> 1000+ Families Helped
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="Happy Family"
              className="rounded-lg shadow-md w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
