import React from "react";

const nest = {
  name: "SilverNest Eldercare, Uppal",
  location: "Uppal, Hyderabad, Telangana",
  verified: true,
  rating: 4.2,
  reviewsCount: 18,
  priceRange: "₹25,000 - ₹45,000",
  features: [
    "24/7 Professional Care",
    "Specialized Nutrition",
    "Dementia Care Experts",
  ],
  idealFor: [
    "Dementia Patients",
    "Post-Surgery Recovery",
    "Long-term Care",
    "Palliative Care",
  ],
  pricingDetails: {
    "Monthly Fee": "₹25,000 - ₹45,000",
    "Security Deposit": "₹50,000 (Refundable)",
    "Admission Fee": "₹10,000 (One-time)",
    "Refund Policy": "90% within 30 days",
  },
  medicalSupport: [
    "24/7 Nursing Staff",
    "Doctor Visit (3 times/week)",
    "Emergency Response System",
    "Medication Management",
    "Physiotherapy (Additional charges)",
  ],
  careTypes: [
    "Assisted Living",
    "Palliative Care",
    "Dementia Care",
    "Post-Surgery Rehabilitation",
    "Long-term Residential Care",
  ],
  meals: [
    "Vegetarian & Non-Vegetarian Options",
    "Customized Diet Plans",
    "Diabetic-friendly Meals",
    "5 Meals Per Day",
    "In-house Nutritionist",
  ],
  amenities: [
    "Garden & Outdoor Sitting Area",
    "Daily Activities & Recreation",
    "Library & Reading Room",
    "Prayer Room",
    "TV & Entertainment Area",
  ],
  ownership: {
    type: "Private",
    yearsOperation: 8,
    nabhAccredited: "Yes",
    healthyNestVerified: "Yes (March 2025)",
  },
  photos: [
    { label: "Common Area" },
    { label: "Private Room" },
    { label: "Dining Hall" },
    { label: "Garden Area" },
    { label: "Medical Room" },
    { label: "Watch Video", isVideo: true },
  ],
  testimonials: [
    {
      name: "Priya Sharma",
      relation: "Daughter of resident",
      rating: 5,
      text: `"SilverNest has been a blessing for our family. My father with early-stage dementia receives exceptional care here. The staff is attentive, compassionate, and keeps us updated regularly. The facility is clean and homely, which was very important to us."`,
      date: "January 15, 2025",
    },
    {
      name: "Rajesh Kapoor",
      relation: "Son of resident",
      rating: 4,
      text: `"After my mother's stroke, we needed specialized care that we couldn't provide at home. The rehabilitation program at SilverNest has helped her regain mobility beyond our expectations. The physiotherapists are excellent, and the nursing staff is always available."`,
      date: "March 8, 2025",
    },
  ],
  ratingSummary: {
    staffQuality: 4.7,
    cleanliness: 4.5,
    comfort: 4.3,
  },
};

const RatingBar = ({ label, value }) => {
  const percentage = (value / 5) * 100;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1 font-semibold text-gray-700">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>
      <div className="w-full h-2 rounded bg-gray-300">
        <div
          className="h-2 rounded bg-black"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function NestDetails() {
  return (
    <main className="max-w-[1300px] mx-auto px-3 md:px-6 lg:px-8 space-y-8 py-8">
      {/* Hero Image */}
      <div className="relative bg-gray-300 h-[18rem] rounded-md overflow-hidden">
        {/* Replace with actual image */}
        <div className="absolute bottom-4 right-4">
          <button className="bg-white text-gray-800 text-sm px-3 py-1 rounded shadow-md">
            See all photos
          </button>
        </div>
      </div>

      {/* Title & Info */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900">{nest.name}</h1>
        <p className="text-gray-600 text-sm mt-1">{nest.location}</p>
        <div className="flex items-center space-x-2 mt-2">
          {nest.verified && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
              Verified
            </span>
          )}
          <span className="text-sm text-gray-700">
            ⭐ {nest.rating} ({nest.reviewsCount} reviews)
          </span>
          <span className="ml-auto text-lg font-semibold text-gray-800">
            {nest.priceRange}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-900">
            Call Now
          </button>
          <button className="border border-gray-300 text-gray-800 text-sm px-6 py-2 rounded-lg hover:bg-gray-100">
            WhatsApp
          </button>
          <button className="border border-gray-300 text-gray-800 text-sm px-6 py-2 rounded-lg hover:bg-gray-100">
            Book Visit
          </button>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 p-6 rounded-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Why Choose {nest.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nest.features.map((feat, idx) => (
            <div key={idx} className="flex flex-col">
              <strong className="text-gray-800">{feat}</strong>
              <p className="text-gray-600 text-sm mt-1">
                {/* You can customize descriptions */}
                Customized support and expert care for your needs.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-900">Ideal For:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {nest.idealFor.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pricing */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">₹ Pricing</h3>
          <dl className="text-gray-700 text-sm space-y-1">
            {Object.entries(nest.pricingDetails).map(([key, val], idx) => (
              <div key={idx} className="flex justify-between">
                <dt>{key}</dt>
                <dd className="font-medium">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Medical Support */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Medical Support</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.medicalSupport.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Care Types */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Care Types</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.careTypes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Meals */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Meals</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.meals.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Amenities */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Amenities</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.amenities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Ownership & Accreditation */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">
            Ownership & Accreditation
          </h3>
          <dl className="text-gray-700 text-sm space-y-1">
            <div className="flex justify-between">
              <dt>Ownership Type</dt>
              <dd>{nest.ownership.type}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Years in Operation</dt>
              <dd>{nest.ownership.yearsOperation} years</dd>
            </div>
            <div className="flex justify-between">
              <dt>NABH Accredited</dt>
              <dd>{nest.ownership.nabhAccredited}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Healthy Nest Verified</dt>
              <dd>{nest.ownership.healthyNestVerified}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Photo Gallery */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Photo Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {nest.photos.map((photo, idx) => (
            <div
              key={idx}
              className={`aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold ${
                photo.isVideo ? "bg-gray-700 text-white" : ""
              }`}
            >
              {photo.label}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Family Testimonials
        </h3>
        <div className="space-y-4">
          {nest.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-5 rounded-md"
            >
              <div className="flex justify-between items-center">
                <div>
                  <strong className="text-gray-800">{t.name}</strong>
                  <span className="text-gray-600 text-sm"> — {t.relation}</span>
                </div>
                <div className="text-yellow-500">{`★`.repeat(t.rating)}</div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">{t.text}</p>
              <div className="mt-2 text-xs text-gray-500">{t.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rating Summary */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Rating Summary</h3>
        <div className="space-y-3 max-w-lg">
          <RatingBar label="Staff Quality" value={nest.ratingSummary.staffQuality} />
          <RatingBar
            label="Cleanliness & Hygiene"
            value={nest.ratingSummary.cleanliness}
          />
          <RatingBar label="Comfort & Amenities" value={nest.ratingSummary.comfort} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white p-8 rounded-md text-center">
        <h3 className="text-xl font-semibold mb-3">
          Ready to visit {nest.name}?
        </h3>
        <p className="text-gray-300 mb-5">
          Schedule a visit or call directly to discuss care plans and facility
          details.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700">
            Schedule Visit
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200">
            Call Directly
          </button>
        </div>
      </section>
    </main>
  );
}
