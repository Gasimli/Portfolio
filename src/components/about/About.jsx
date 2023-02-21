import React from "react";
import "./about.css";
import { MdWorkOutline } from "react-icons/md";

var Me = require("../.././assets/photo.png");

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={Me} alt="me" /> */}
          </div>
        </div>

        <div className="" about__content>
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Lorem ipsum dolor</h5>
              <small>Lorem Ipsum</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Lorem ipsum dolor</h5>
              <small>Lorem Ipsum</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Lorem ipsum dolor</h5>
              <small>Lorem Ipsum</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            eaque veritatis quibusdam ad quaerat doloribus magnam consequatur
            distinctio explicabo mollitia deleniti facere harum modi eum
            perspiciatis minima, quo dignissimos architecto!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
