import React from "react";
import "./portfolio.css";

var portfolioPhoto = require("../../assets/portfolio1.png");

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfolioPhoto} alt={"portfolioPhoto"} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn">
              Live Demo
            </a>
            <a href="github.com" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
