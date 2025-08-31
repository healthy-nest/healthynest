import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ElderNestDetail } from "../models/ElderNest";
import { getElderNestByDocumentId, getImageUrl } from "../services/ElderNestService";
import { createCustomerLead } from "../services/CustomerLeadService";

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
  const [copiedDirect, setCopiedDirect] = useState(false);
  const [showExpertModal, setShowExpertModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleExpertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCustomerLead({
        FullName: customerName,
        Email: customerEmail,
        PhoneNumber: customerPhoneNumber,
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
      setShowExpertModal(false);
      setCustomerName("");
      setCustomerPhoneNumber("");
      setCustomerEmail("");
    } catch (error) {
      alert("Failed to submit. Please try again.");
    }
  };

  
  const { id: documentId } = useParams<{ id: string }>();
  const [nest, setNest] = useState<ElderNestDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNest = async () => {
      try {
        setLoading(true);
        if (!documentId) {
          setError("No documentId provided in URL.");
          setLoading(false);
          return;
        }
        console.log("Fetching nest for documentId:", documentId);
        const data = await getElderNestByDocumentId(documentId);
        if (!data) {
          setError("No data found for this nest.");
        } else {
          setNest(data);
        }
      } catch (err: any) {
        console.error("Error fetching nest:", err);
        setError(err.message || "Failed to load elder nest details.");
      } finally {
        setLoading(false);
      }
    };
    fetchNest();
  }, [documentId]);

  if (loading) {
    return <p className="text-center text-gray-600 py-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  if (!nest) {
    return <p className="text-center text-gray-600 py-10">No data found.</p>;
  }



  return (
    <main className="max-w-[1300px] mx-auto px-3 md:px-6 lg:px-8 space-y-8 py-8">
      {/* Hero Image */}
      <div className="relative bg-gray-300 h-[18rem] rounded-md overflow-hidden">
        {nest.Banner?.url && (
          <img
            src={nest.Banner.url}
            alt={nest.Name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute bottom-4 right-4">
          <button className="bg-white text-gray-800 text-sm px-3 py-1 rounded shadow-md">
            See all photos
          </button>
        </div>
      </div>

      {/* Title & Info */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900">{nest.Name}</h1>
        <p className="text-gray-600 text-sm mt-1">{nest.Address?.Locality && nest.Address.City}</p>
        <div className="flex items-center space-x-2 mt-2">
          {/*nest.verified && */}
          {(
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
              Verified
            </span>
          )}
          {/*<span className="text-sm text-gray-700">
            ⭐ {nest.rating} ({nest.reviewsCount} reviews)
          </span>*/}
          <span className="ml-auto text-lg font-semibold text-gray-800">
            ₹{nest.Pricing?.minimum} - ₹{nest.Pricing?.maximum}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="tel:9941474950"
            className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-900 flex items-center justify-center"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919941474950"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-800 text-sm px-6 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-900 flex items-center justify-center"
            onClick={() => setShowExpertModal(true)}
          >
            Talk to Expert
          </button>
        </div>

        {/* Expert Modal */}
        {showExpertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
                onClick={() => setShowExpertModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-900"
                onClick={() => setShowExpertModal(true)}
              >Talk to an Expert</h2>
              <p className="text-gray-700 mb-4">Our care expert will help you with all your queries and guide you through the process.</p>
              <form className="flex flex-col gap-4" onSubmit={handleExpertSubmit}>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Name"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone Number"
                  value={customerPhoneNumber}
                  onChange={e => setCustomerPhoneNumber(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
              {submitted && (
                <div className="text-green-600 mt-2 text-center">Thank you! Our expert will contact you soon.</div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 p-6 rounded-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Why Choose {nest.Name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nest.Specializations?.map((feat, idx) => (
            <div key={idx} className="flex flex-col">
              <strong className="text-gray-800">{feat.Title}</strong>
              <p className="text-gray-600 text-sm mt-1">
                {/* You can customize descriptions */}
                {feat.Description || "Customized support and expert care for your needs."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Information Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pricing */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">₹ Pricing</h3>
          <dl className="text-gray-700 text-sm space-y-1">
            <div className="flex justify-between">
              <dt>Monthly Fee</dt>
              <dd className="font-medium">₹{nest.Pricing?.minimum} - ₹{nest.Pricing?.maximum}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Security Deposit</dt>
              <dd className="font-medium">₹{nest.Pricing?.SecurityDeposit}(Refundable)</dd>
            </div>
            <div className="flex justify-between">
              <dt>Admission Fee</dt>
              <dd className="font-medium">₹{nest.Pricing?.AdmissionFee}(One-time Deposit)</dd>
            </div>
          </dl>
        </div>

        {/* Medical Support */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Medical Support</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.MedicalSupport?.map((item, idx) => (
              <li key={idx}>{item.Title}</li>
            ))}
          </ul>
        </div>

        {/* Care Types */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Care Types</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.CareTypes?.map((item, idx) => (
              <li key={idx}>{item.Title}</li>
            ))}
          </ul>
        </div>

        {/* Meals */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Meals</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.MealSupport?.map((item, idx) => (
              <li key={idx}>{item.Title}</li>
            ))}
          </ul>
        </div>

        {/* Amenities */}
        <div className="bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-3">Amenities</h3>
          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
            {nest.Amenities?.map((item, idx) => (
              <li key={idx}>{item.Title}</li>
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
              <dd>{nest.OwnershipType}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Years in Operation</dt>
              <dd>{
                nest.EstablishedAt instanceof Date && !isNaN(nest.EstablishedAt.getFullYear())
                  ? new Date().getFullYear() - nest.EstablishedAt.getFullYear()
                  : 0
              } years</dd>
            </div>
            <div className="flex justify-between">
              <dt>NABH Accredited</dt>
              {/*<dd>{nest.NABHAccredited ? "Yes" : "No"}</dd>  */}
              <dd>{"Yes"}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Healthy Nest Verified</dt>
              <dd>{"Yes"} {nest.OnBoardedAt?.toString()}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Photo Gallery */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Photo Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {nest.NestGallery?.map((photo, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
            >
              {photo.formats?.thumbnail?.url ? (
                <img
                  src={`${photo.formats.thumbnail.url}`}
                  alt={photo.name || `Gallery photo ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials 
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
      */}
      {/* Rating Summary
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
       */}

      {/* Call to Action */}
      <section className="bg-gray-900 text-white p-8 rounded-md text-center">
        <h3 className="text-xl font-semibold mb-3">
          Ready to visit {nest.Name}?
        </h3>
        <p className="text-gray-300 mb-5">
          Schedule a visit or call directly to discuss care plans and facility
          details.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          
          <div className="flex items-center gap-2">
            <a
              href="tel:9941474950"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 flex items-center justify-center"
            >
              Call Directly
            </a>
           
            <button
              type="button"
              className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
              onClick={async () => {
                await navigator.clipboard.writeText('9941474950');
                setCopiedDirect(true);
                setTimeout(() => setCopiedDirect(false), 1500);
              }}
            >
              Copy Contact
            </button>
            {copiedDirect && (
              <span className="ml-2 text-green-600 text-xs">Copied!</span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
