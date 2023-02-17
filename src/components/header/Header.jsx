import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Fathi Gasimli</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src="{ME}" alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
