import React, { Component } from 'react';
import './styles.css';

export class HeroImage extends Component {
  render() {
    return (
      <section className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </section>
    );
  }
}

export default HeroImage;
