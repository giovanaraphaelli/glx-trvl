import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import CardPrecos from '../components/CardPrecos';

const Precos = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="VALORES." text="Escolha sua viagem." />
      <CardPrecos />
      <Footer />
    </div>
  );
};

export default Precos;
