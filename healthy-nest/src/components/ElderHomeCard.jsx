import { Phone, MessageCircle, Star, CheckCircle } from "lucide-react";

export default function ElderHomeCard({ home }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex gap-4">

        {/* Provider Image */}
        {home.image ? (
          <img
            src={home.image}
            alt={home.name}
            className="w-32 h-28 object-cover rounded"
            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/128x112?text=No+Image'; }}
          />
        ) : (
          <div className="w-32 h-28 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        )}

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-md font-semibold text-gray-800">{home.name}</h3>
              <p className="text-sm text-gray-500">{home.location}</p>
            </div>
            <div className="text-orange-600 font-semibold text-sm">{home.price}</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
            {home.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-0.5 rounded border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-3 text-sm">
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle className="w-4 h-4" />
              Verified
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4" /> {home.rating} ({home.reviews})
            </div>
          </div>

          <div className="flex gap-2 mt-3 text-sm">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded flex items-center justify-center gap-1">
              <Phone className="w-4 h-4" /> Call
            </button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded flex items-center justify-center gap-1">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </button>
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
