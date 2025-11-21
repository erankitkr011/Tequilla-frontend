import React from 'react';
import './ReadyToEvolve.css';
import xShape from '../../assets/images/x.svg';
import callIcon from '../../assets/images/ReadyToEvolve/Call.png';
import mailIcon from '../../assets/images/ReadyToEvolve/Mail.png';
import facebookIcon from '../../assets/images/ReadyToEvolve/Facebook.png';
import linkedinIcon from '../../assets/images/ReadyToEvolve/Linkedin.png';
import twitterIcon from '../../assets/images/ReadyToEvolve/Twitter.png';
import instagramIcon from '../../assets/images/ReadyToEvolve/instagram.png';

const ReadyToEvolve = () => {
  return (
    <section className="ready-section">
      <div className="ready-background">
        <img src={xShape} alt="" className="ready-x-shape" />
      </div>

      <div className="ready-container">
        <div className="ready-content">
          <h2 className="ready-title">
            Ready To<br />
            Evolve?
          </h2>

          <div className="ready-contact">
            <div className="contact-item">
              <img src={callIcon} alt="Phone" className="contact-icon" />
              <span className="contact-text">+971 06 521 1720</span>
            </div>
            <div className="contact-item">
              <img src={mailIcon} alt="Email" className="contact-icon" />
              <span className="contact-text">contact@dataxsolution.net</span>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#solutions">Solutions</a>
              <a href="#analytics">Analytics</a>
              <a href="#hr-solution">HR Solution</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">GET CONNECTED</h4>
            <div className="social-icons">
              <a href="#facebook" className="social-icon">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#linkedin" className="social-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#twitter" className="social-icon">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#instagram" className="social-icon">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToEvolve;
