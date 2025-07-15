import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <h1 className="text-lg font-semibold text-green-700 flex items-center gap-2">
        <span className="text-xl">🌿</span> Healthy Nest
      </h1>
      <button className="md:hidden">
        <Menu className="w-6 h-6 text-gray-600" />
      </button>
    </header>
  );
}
