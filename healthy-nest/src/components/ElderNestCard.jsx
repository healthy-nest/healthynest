import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaBalanceScale,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ElderCareCard = ({ data }) => {
  return (
    <div className="border rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-md hover:shadow-lg transition-shadow bg-white min-h-[280px]">
      
      {/* Image + Rating + Verified */}
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <div className="w-full h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm mb-3">
          Provider Image
        </div>
        <div className="flex justify-between w-full px-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {data.rating || "4.5"}
          </span>
          <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
            <FaCheckCircle className="text-green-600 text-xs" />
            Verified
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title & Location & Price */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
            <p className="text-sm text-gray-500">{data.location}</p>
          </div>
          <div className="text-green-700 font-bold text-lg whitespace-nowrap">
            ₹{data.price}/mo
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
          {data.features.map((f, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-2 py-1 rounded-full border text-xs"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">
          {data.description}
        </p>

        {/* Bottom Row with Actions and View */}
        <div className="flex justify-between items-center mt-2">
          {/* Buttons */}
          <div className="flex gap-3 text-sm">
            <button className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition font-medium">
              <FaPhoneAlt />
              Call
            </button>
            <button className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition font-medium">
              <FaWhatsapp />
              WhatsApp
            </button>
            <button className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition font-medium">
              <FaBalanceScale />
              Compare
            </button>
          </div>

          {/* View Button */}
            <Link to="/healthynest/nest/:1"
                className="text-sm text-green-600 hover:underline font-medium whitespace-nowrap"
            >
                View →
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ElderCareCard;
