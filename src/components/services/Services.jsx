import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Lorem ipsum dolor</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Lorem ipsum dolor</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Lorem ipsum dolor</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <AiOutlineCheck className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
