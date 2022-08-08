import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CardPrecos = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Básico -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Dias -</p>
          <p>- Vistas -</p>
          <p>- Destaque -</p>
          <p>- Acomodação Privada -</p>
          <Link to="/contato" className="btn">
            Reservar
          </Link>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">2 BTC</p>
          <p>- 3 Dias -</p>
          <p>- Vistas -</p>
          <p>- Destaque -</p>
          <p>- Acomodação Privada -</p>
          <Link to="/contato" className="btn">
            Reservar
          </Link>
        </div>
        <div className="card">
          <h3>- Executivo -</h3>
          <span className="bar"></span>
          <p className="btc">3 BTC</p>
          <p>- 3 Dias -</p>
          <p>- Vistas -</p>
          <p>- Destaque -</p>
          <p>- Acomodação Privada -</p>
          <Link to="/contato" className="btn">
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPrecos;
