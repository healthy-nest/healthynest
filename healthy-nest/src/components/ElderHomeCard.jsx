import { Star, CheckCircle, Plus, Eye, MessageSquare } from "lucide-react";

export default function ElderHomeCard({ home }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="relative">
        <img
          src={home.image}
          alt={home.name}
          className="w-full h-40 object-cover rounded-md"
        />
        {home.verified && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Verified
          </span>
        )}
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-gray-800">{home.name}</h4>
          <span className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star className="w-4 h-4" /> {home.rating}
          </span>
        </div>
        <p className="text-sm text-gray-600">{home.location}</p>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded text-sm flex items-center justify-center gap-1">
            <Eye className="w-4 h-4" /> View
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded text-sm flex items-center justify-center gap-1">
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded text-sm flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
