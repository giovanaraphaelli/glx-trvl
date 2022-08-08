import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import spaceVideo from '../../assets/space.mp4';

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>Primeira viagem espacial civil do mundo.</p>

        <div>
          <Link to="/treinamento" className="btn">
            Treinamento
          </Link>
          <Link to="/contato" className="btn btn-light">
            Lançamento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
