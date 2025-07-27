// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FeaturedHomes from '../components/FeaturedHomes';
import WhyHealthyNest from '../components/WhyHealthyNest';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <SearchBar />
      <FeaturedHomes />
      <WhyHealthyNest />
      <Categories />
      <Testimonials />
    </div>
  );
};

export default Home;
