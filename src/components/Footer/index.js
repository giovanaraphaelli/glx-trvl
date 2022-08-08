import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from 'react-icons/fa';

import './styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ marginRight: '2rem' }} />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ marginRight: '2rem' }} />
              1-800-123-1234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ marginRight: '2rem' }} />
              trips@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Sobre nós</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quis sunt numquam dolor adipisci laborum expedita,
            aliquam eaque corporis, veniam incidunt nemo nisi quia minima,
            architecto repellat? Culpa, veniam iste.
          </p>
          <div className="social">
            <FaFacebook size={30} style={{ marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
