import React from "react";
import "./navbar.css";
import { Toggle } from "../Toggle/Toggle";
import logo from "../../assets/logo.png";
import LanguageToggler from "../LanguageToggle/LanguageToggler";
import navbar from "./navbarData";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    function update() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      {screenWidth > 1100 ? (
        <div className="navbar-container glass">
          <a className="logo-container" href="/">
            <img src={logo} alt="khamais-maaroufi-logo" />
          </a>
          <ul className="nav-menu-container">
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
          <div className="config-container">
            <LanguageToggler />
            <Toggle />
          </div>
        </div>
      ) : (
        <>
          <div className="responsive-theme-toggle">
            <Toggle />
            <LanguageToggler />
          </div>

          <ResponsiveNav />
        </>
      )}
    </>
  );
};

export default NavBar;
