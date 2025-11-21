import React from 'react';
import './CaseStudies.css';
import socialImage from '../../assets/images/CaseStudies/Social.png';
import switzerImage from '../../assets/images/CaseStudies/Switzer.png';
import poissonImage from '../../assets/images/CaseStudies/Poisson.png';

const CaseStudies = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <h2 className="case-studies-title">
          Case<br />
          Studies
        </h2>

        <div className="case-studies-grid">
          <div className="case-study-card">
            <div className="case-study-image">
              <img src={socialImage} alt="Social Finance" />
            </div>
            <div className="case-study-content">
              <h3 className="case-study-heading">
                Social Finance: A Decentralized Creators Economy
              </h3>
              <p className="case-study-date">16 Nov 2021</p>
            </div>
            <div className="case-study-bar orange"></div>
          </div>

          <div className="case-study-card">
            <div className="case-study-image">
              <img src={switzerImage} alt="Switzerland-Wide Rollout" />
            </div>
            <div className="case-study-content">
              <h3 className="case-study-heading">
                Switzerland-Wide Rollout Of Digital Authorization For Unmanned Aer...
              </h3>
              <p className="case-study-date">16 Nov 2021</p>
            </div>
            <div className="case-study-bar orange"></div>
          </div>

          <div className="case-study-card">
            <div className="case-study-image">
              <img src={poissonImage} alt="Poisson Distribution" />
            </div>
            <div className="case-study-content">
              <h3 className="case-study-heading">
                Poisson Distribution - Adapting For Different Intervals
              </h3>
              <p className="case-study-date">16 Nov 2021</p>
            </div>
            <div className="case-study-bar orange"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
