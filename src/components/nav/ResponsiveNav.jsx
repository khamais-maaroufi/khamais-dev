import React, { useState, useContext } from "react";
import "./responsiveNav.css";
import navbar from "./navbarData";
import LanguageContext from "../../context/LanguageContext";

const ResponsiveNav = () => {
  const [drop, setDrop] = useState(false);
  const { language } = useContext(LanguageContext);
  return (
    <div className="burger-conatiner">
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          onClick={() => setDrop((prev) => !prev)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      {drop && (
        <ul className="responsive-menu glass scale-up-tr">
          <li>
            <a href="#about">{navbar.about[language]}</a>
            <div className="bottom-bar"></div>
          </li>
          <li>
            <a href="#experience">{navbar.experience[language]}</a>
            <div className="bottom-bar"></div>
          </li>
          <li>
            <a href="#certifications">{navbar.certifications[language]}</a>
            <div className="bottom-bar"></div>
          </li>
          <li>
            <a href="#skills">{navbar.skills[language]}</a>
            <div className="bottom-bar"></div>
          </li>
          <li>
            <a href="#projects">{navbar.projects[language]}</a>
            <div className="bottom-bar"></div>
          </li>
          <li>
            <a href="#contact">{navbar.contact[language]}</a>
            <div className="bottom-bar"></div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ResponsiveNav;
