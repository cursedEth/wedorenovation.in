import React from 'react';
import {
  Modal,
  Hero,
  Info,
  Skills,
  Services,
  Reviews,
  Gallery,
  Contact,
} from '../components';
import Seo from './Seo';

const HomePage = () => {
  return (
    <>
      <Seo
        title="We Do Renovation™ - Best Renovation, Construction & Painting Company since
      1960s"
      />
      <Modal />
      <Hero />
      <Info />
      <Skills />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  );
};

export default HomePage;
