import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

const Contato = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTATO." text="Contate GLX TRVL" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contato;
