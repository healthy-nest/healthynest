const elderHomes = [
  {
    name: "Sunshine Elder Care",
    location: "Banjara Hills, Hyderabad",
    price: "₹12,000",
    rating: 4.8,
    reviews: 124,
    verified: true,
    tags: ["24x7 Medical", "Veg Meals", "Garden", "Religious Space"],
  },
  {
    name: "Serenity Elder Home",
    location: "Jubilee Hills, Hyderabad",
    price: "₹15,500",
    rating: 4.6,
    reviews: 98,
    verified: true,
    tags: ["24x7 Medical", "Veg Meals", "Garden", "Accessibility"],
  },
  {
    name: "Golden Years Care",
    location: "Warangal",
    price: "₹9,800",
    rating: 4.9,
    reviews: 156,
    verified: true,
    tags: ["24x7 Medical", "Veg Meals", "Religious Space", "NGO Run"],
  },
];


// Sample images from unsplash (elderly care, home, etc.)
// You can replace these with your own images in the public/assets folder if needed

/*
  Fields: name, location, city, area, price, rating, reviews, verified, tags, image
*/

const moreHomes = [
  {
    name: "Elder Blossom Care",
    location: "Madhapur, Hyderabad",
    city: "Hyderabad",
    area: "Madhapur",
    price: "₹11,000",
    rating: 4.2,
    reviews: 60,
    verified: false,
    tags: ["Short Stay", "Veg Meals", "Garden"],
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" // Home exterior
  },
  {
    name: "Peaceful Pathways",
    location: "Ameerpet, Hyderabad",
    city: "Hyderabad",
    area: "Ameerpet",
    price: "₹17,500",
    rating: 4.8,
    reviews: 140,
    verified: true,
    tags: ["Dementia Care", "Home-cooked", "Accessibility"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" // Cozy living room
  },
  {
    name: "Harmony Elder Home",
    location: "Kazipet, Warangal",
    city: "Warangal",
    area: "Kazipet",
    price: "₹12,800",
    rating: 4.4,
    reviews: 85,
    verified: true,
    tags: ["Assisted Living", "Veg Meals", "Garden"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" // Garden/yard
  },
  {
    name: "Serene Meadows",
    location: "Hanamkonda, Warangal",
    city: "Warangal",
    area: "Hanamkonda",
    price: "₹9,500",
    rating: 4.1,
    reviews: 55,
    verified: false,
    tags: ["Long-term Care", "Veg Meals", "Visitors Allowed"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // Indian family
  },
  {
    name: "Blissful Living Home",
    location: "Kondapur, Hyderabad",
    city: "Hyderabad",
    area: "Kondapur",
    price: "₹13,200",
    rating: 4.7,
    reviews: 110,
    verified: true,
    tags: ["24x7 Medical", "Veg Meals", "Garden"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" // Cozy living room
  },
  {
    name: "CareNest Elderly Home",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    area: "Gachibowli",
    price: "₹14,000",
    rating: 4.5,
    reviews: 90,
    verified: false,
    tags: ["Doctor on Call", "Home-cooked", "Accessibility"],
    image: "https://images.unsplash.com/photo-1524492449090-1a07e61b8a47?auto=format&fit=crop&w=400&q=80" // Indian home exterior
  },
  {
    name: "Silver Lining Care",
    location: "Hanamkonda, Warangal",
    city: "Warangal",
    area: "Hanamkonda",
    price: "₹10,500",
    rating: 4.3,
    reviews: 70,
    verified: true,
    tags: ["Long-term Care", "Veg Meals", "Visitors Allowed"],
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" // Indian home garden
  },
  {
    name: "Golden Age Retreat",
    location: "Secunderabad, Hyderabad",
    city: "Hyderabad",
    area: "Secunderabad",
    price: "₹16,000",
    rating: 4.9,
    reviews: 180,
    verified: true,
    tags: ["24x7 Medical", "Garden", "Religious Activities"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" // Indian family living room
  },
];

// Merge with original homes, add image/city/area to originals for demo
elderHomes[0].city = "Hyderabad";
elderHomes[0].area = "Banjara Hills";
elderHomes[1].city = "Hyderabad";
elderHomes[1].area = "Jubilee Hills";
elderHomes[2].city = "Warangal";
elderHomes[2].area = "Warangal";

const allHomes = [...elderHomes, ...moreHomes];

export default allHomes;
