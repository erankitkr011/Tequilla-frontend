import React from 'react';
import './Solutions.css';
import solutionsImage from '../../assets/images/solutions.png';
import githubIcon from '../../assets/images/github.png';
import mongodbIcon from '../../assets/images/Mongodb.png';
import postgraceIcon from '../../assets/images/Postgrace.png';
import elasticIcon from '../../assets/images/Elastic.png';
import casendraIcon from '../../assets/images/Casendra.png';
import redisIcon from '../../assets/images/redis.png';
import hashiCorpIcon from '../../assets/images/HashiCorp.png';
import harnessIcon from '../../assets/images/Hardness.png';
import kafkaIcon from '../../assets/images/Kafka.png';

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <img src={solutionsImage} alt="Solutions" className="solutions-main-title" />
          <p className="solutions-subtitle">
            We provide the best solutions and tools for all your data needs to ensure your<br />
            achieve maximum productivity and returns.
          </p>
        </div>

        <div className="solutions-category">
          <h3 className="category-title">Open Source</h3>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <img src={githubIcon} alt="GitHub" />
              </div>
              <h4 className="solution-name">GitHub</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={mongodbIcon} alt="MongoDB" />
              </div>
              <h4 className="solution-name">Mongo DB</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={postgraceIcon} alt="PostgreSQL" />
              </div>
              <h4 className="solution-name">Postgre SQL</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>
          </div>
        </div>

        <div className="solutions-category">
          <h3 className="category-title">Data Analytics</h3>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <img src={elasticIcon} alt="Elastic" />
              </div>
              <h4 className="solution-name">Elastic</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={casendraIcon} alt="DataStax Cassandra" />
              </div>
              <h4 className="solution-name">DataStax Cassandra</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={redisIcon} alt="Redis" />
              </div>
              <h4 className="solution-name">Redis</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>
          </div>
        </div>

        <div className="solutions-category">
          <h3 className="category-title">Technology</h3>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <img src={hashiCorpIcon} alt="HashiCorp" />
              </div>
              <h4 className="solution-name">HashiCorp</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={harnessIcon} alt="Harness" />
              </div>
              <h4 className="solution-name">Harness</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <img src={kafkaIcon} alt="Apache Kafka" />
              </div>
              <h4 className="solution-name">Apache Kafka</h4>
              <p className="solution-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. amet, consetetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
