import React from 'react';
import {
  Hero,
  Info,
  WhyChooseUs,
  Services,
  Testimonials,
  Gallery,
  Contact,
} from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Info />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
};

export default HomePage;
