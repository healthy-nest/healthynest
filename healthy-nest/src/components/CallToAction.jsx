import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#FCFAF6] py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
        Ready to find the perfect home for your loved ones?
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Let us help you make the best choice for your family’s future.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-green-800 transition">
          Start Comparing Homes
        </button>
        <button className="border border-green-700 text-green-700 font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition">
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
