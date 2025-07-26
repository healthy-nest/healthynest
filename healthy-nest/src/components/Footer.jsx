export default function Footer() {
  return (
    <footer className="mt-8 bg-white text-gray-700 border-t">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-3 items-center text-center">
        <div>
          <h3 className="text-xl font-bold text-green-700">2,000+</h3>
          <p className="text-sm">Trusted by families</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-700">97%</h3>
          <p className="text-sm">Satisfaction rate</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="bg-gray-100 border px-2 py-1 rounded">Provider Logo</span>
          <span className="bg-gray-100 border px-2 py-1 rounded">Provider Logo</span>
          <span className="bg-gray-100 border px-2 py-1 rounded">Provider Logo</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex justify-center gap-3 mb-4 text-xs text-green-700">
        <span className="border px-2 py-1 rounded border-green-600">All homes verified by Healthy Nest</span>
        <span className="border px-2 py-1 rounded border-green-600">NABH Standards</span>
      </div>

      {/* Call to Action */}
      <div className="bg-[#fcfcfa] py-6 px-4 text-center">
        <p className="text-sm mb-4">Need help choosing the right elder care?</p>
        <p className="text-gray-600 text-sm max-w-lg mx-auto mb-4">
          Our care experts can guide you through the process and help you find the perfect home for your loved ones.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
            🧑‍⚕️ Chat with an Expert
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded">
            📩 Email Us
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-white border-t py-6 text-sm text-center">
        <div className="max-w-7xl mx-auto px-4 grid gap-4 md:grid-cols-4 text-left">
          <div>
            <h4 className="font-semibold text-green-700">Healthy Nest</h4>
            <p className="text-xs mt-1">Empowering families with better elder care choices across India.</p>
            <div className="flex gap-3 mt-2 text-green-600">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">📘</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">For Families</h4>
            <ul className="space-y-1 mt-1 text-xs">
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Find Care Homes</a></li>
              <li><a href="#">Compare Services</a></li>
              <li><a href="#">Elder Care Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">For Providers</h4>
            <ul className="space-y-1 mt-1 text-xs">
              <li><a href="#">List Your Facility</a></li>
              <li><a href="#">Provider Dashboard</a></li>
              <li><a href="#">Quality Standards</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-1 mt-1 text-xs">
              <li>📧 hello@healthynestcare.com</li>
              <li>📞 +91 9876543210</li>
              <li>📍 Hyderabad, Telangana, India</li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-6">
          <p>Built with ❤️ by Healthy Nest | Supported by FlynnSoft</p>
          <p className="mt-1">© 2025 Healthy Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
