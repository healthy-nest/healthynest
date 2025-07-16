export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-green-700 font-semibold text-xl">🌿 Healthy Nest</div>
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">For Providers</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>
        <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
}
