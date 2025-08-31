import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#FCFAF6] py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Ready to find the perfect home for your loved ones?
      </h2>

      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Let us help you make the best choice for your family’s future.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <button className="bg-primary text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-primary-700 transition">
          Start Comparing Homes
        </button>
        <button className="border border-primary text-primary font-semibold py-3 px-6 rounded-full hover:bg-primary-100 transition">
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
