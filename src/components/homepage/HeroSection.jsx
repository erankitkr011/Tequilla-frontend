import React from 'react';
import './HeroSection.css';
import businessPeople from '../../assets/images/business-man-woman.svg';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';
import longRightArrow from '../../assets/images/longrightarrow.svg';
import graph from '../../assets/images/graph.png';
import rectangleLine from '../../assets/images/rectagleline.svg';
import xShape from '../../assets/images/x.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={xShape} alt="" className="x-shape" />
      </div>
      
      <div className="hero-container">
        <button className="nav-arrow left-arrow">
          <img src={leftArrow} alt="Previous" />
        </button>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Leading Provider of <br />
              Open Data Solutions
            </h1>
            <p className="hero-description">
              Supporting clients through digital <br />
              transformation allowing to maximize <br />
              investments from data assets
            </p>
            <button className="learn-more-btn">
              <span className="arrow-circle">→</span>
              <span>LEARN MORE</span>
            </button>
          </div>

          <div className="hero-image">
            <img src={businessPeople} alt="Business professionals" className="business-people" />
            <div className="graph-overlay">
              <img src={graph} alt="Growth chart" />
            </div>
            <div className="rectangle-decoration">
              <img src={rectangleLine} alt="" />
            </div>
          </div>
        </div>

        <button className="nav-arrow right-arrow">
          <img src={rightArrow} alt="Next" />
        </button>
      </div>

      <div className="carousel-dots">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default HeroSection;
