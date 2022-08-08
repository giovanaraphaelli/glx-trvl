import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

const Treinamento = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="TREINAMENTO."
        text="Treinamento Pre-Flight & In-Flight."
      />
      <Footer />
    </div>
  );
};

export default Treinamento;
