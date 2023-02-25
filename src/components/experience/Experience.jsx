import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Lorem ipsum dolor sit</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Lorem ipsum dolor sit</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Lorem ipsum dolor sit</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Lorem ipsum dolor sit</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Lorem ipsum dolor sit</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>

          {/* END OF FRONTEND */}

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <h4>Lorem ipsum dolor sit</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <h4>Lorem ipsum dolor sit</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <h4>Lorem ipsum dolor sit</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <h4>Lorem ipsum dolor sit</h4>
                <small className="text-light">Experienced</small>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <h4>Lorem ipsum dolor sit</h4>
                <small className="text-light">Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
