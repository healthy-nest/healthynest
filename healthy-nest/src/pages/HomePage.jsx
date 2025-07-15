import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import ElderHomeCard from "../components/ElderHomeCard";

const featuredHomes = [
  {
    name: "Aashray Elder Home",
    location: "Banjara Hills, Hyderabad",
    rating: 4.7,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=1200&q=80",
  },
  {
    name: "Shanti Nilayam",
    location: "Jubilee Hills, Hyderabad",
    rating: 4.5,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828e6f?fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <SearchBar />
      <section className="p-4">
        <h3 className="text-md font-semibold text-gray-700 mb-2">
          Featured Elder Care Homes
        </h3>
        {featuredHomes.map((home, index) => (
          <ElderHomeCard key={index} home={home} />
        ))}
      </section>
    </div>
  );
}
