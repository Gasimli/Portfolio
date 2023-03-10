import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_urid3mr",
      "template_2uc45j7",
      form.current,
      "X4wkUM6-nE0qBFrct"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      {" "}
      <h5>Get In Touch</h5> <h2>Contact Me</h2>{" "}
      <div className="container contact__container">
        {" "}
        <form ref={form} onSubmit={sendEmail}>
          {" "}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />{" "}
          <input type="text" name="email" placeholder="Your Email" required />{" "}
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>{" "}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </section>
  );
};
export default Contact;
