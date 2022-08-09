import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import Pod from '../../assets/pod.jpg';
import Moon from '../../assets/moon.jpg';

const TreinamentoSection = () => {
  return (
    <section className="training">
      <div className="left">
        <h1>Treinamento</h1>
        <p>
          É necessário um treinamento completo ao viajar para o espaço.
          Oferecemos treinamento com tudo incluso para cenários Pre-Flight &
          In-Flight.
        </p>
        <Link to="/contato">
          <button className="btn">Contato</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreinamentoSection;
