import React, { useContext } from "react";
import "./contact.css";
import LanguageContext from "../../context/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="contact"
      className="section-container"
      style={{ marginTop: "20vh", height: "80vh" }}
    >
      <h1 data-aos="fade-up" className="gradient-text heading-one">
        Contact
      </h1>
      <div className="form-container glass">
        <form>
          <input type="text" />
          <input type="text" />
          <textarea />
          <button>Submit</button>
        </form>
      </div>
      <div data-aos="fade-up-right" className="cube">
        <div id="shape">
          <div class="front"></div>
          <div class="left"></div>
          <div class="right"></div>
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="back"></div>
        </div>
      </div>
      <div data-aos="fade-up-right" className="secondcube">
        <div id="shape">
          <div class="front"></div>
          <div class="left"></div>
          <div class="right"></div>
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="back"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
