import React from 'react';
import './AboutDataX.css';
import timeHandImage from '../../assets/images/About/TimeHand.png';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';

const AboutDataX = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">
            About<br />
            Data X Solutions
          </h2>
          <div className="about-image-wrapper">
            <img src={timeHandImage} alt="Stopwatch in hand" className="about-image" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <h3 className="about-heading">
              Listing Millions<br />
              Of Records In<br />
              Milliseconds
            </h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consetetur<br />
              sadipscing elitr, sed diam. amet,<br />
              consetetur.
            </p>

            <div className="about-dots">
              <span className="about-dot active"></span>
              <span className="about-dot"></span>
              <span className="about-dot"></span>
            </div>

            <div className="about-navigation">
              <button className="about-nav-btn">
                <img src={leftArrow} alt="Previous" />
              </button>
              <button className="about-nav-btn">
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDataX;
