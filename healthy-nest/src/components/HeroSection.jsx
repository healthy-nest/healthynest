export default function HeroSection() {
  return (
    <section className="bg-white pb-6">
      <img
        src="https://images.unsplash.com/photo-1588776814546-ec7b66f21384?fit=crop&w=1200&q=80"
        alt="Elderly couple"
        className="w-full h-48 object-cover"
      />
      <div className="px-4 text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Compare Verified Elder Care Homes Near You
        </h2>
        <p className="text-sm text-gray-600">
          Photos, reviews, and contact details — all in one place.
        </p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow">
          🔍 Start Comparing
        </button>
      </div>
    </section>
  );
}
