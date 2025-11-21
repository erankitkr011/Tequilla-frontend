import React from 'react';
import './OurClients.css';
import emiratesLogo from '../../assets/images/ClientsImage/Emirates.png';
import roshanLogo from '../../assets/images/ClientsImage/Roshan.png';
import etisalatLogo from '../../assets/images/ClientsImage/etisalat.png';
import zainLogo from '../../assets/images/ClientsImage/Zain.png';
import rakbankLogo from '../../assets/images/ClientsImage/Rakbank.png';
import capitalBankLogo from '../../assets/images/ClientsImage/CapitalBank.png';
import livLogo from '../../assets/images/ClientsImage/liv.png';
import bankAljaziraLogo from '../../assets/images/ClientsImage/BankAljazira.png';

const OurClients = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">
          Our<br />
          <span className='clients'>Clients</span>
        </h2>

        <div className="clients-grid">
          <div className="client-card">
            <img src={emiratesLogo} alt="Emirates NBD" />
          </div>
          <div className="client-card">
            <img src={roshanLogo} alt="Roshan" />
          </div>
          <div className="client-card">
            <img src={etisalatLogo} alt="Etisalat" />
          </div>
          <div className="client-card">
            <img src={zainLogo} alt="Zain" />
          </div>
          <div className="client-card">
            <img src={rakbankLogo} alt="Rakbank" />
          </div>
          <div className="client-card">
            <img src={capitalBankLogo} alt="Capital Bank" />
          </div>
          <div className="client-card">
            <img src={livLogo} alt="liv." />
          </div>
          <div className="client-card">
            <img src={bankAljaziraLogo} alt="Bank Aljazira" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
