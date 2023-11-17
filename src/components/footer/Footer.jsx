import React, { useContext, useEffect, useState } from "react";
import "./footer.css";
import LanguageContext from "../../context/LanguageContext";
import navbar from "../../components/nav/navbarData";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState("2023");
  const { language } = useContext(LanguageContext);
  useEffect;
  () => {
    setCurrentYear(new Date().getFullYear());
  },
    [];
  return (
    <div className="footer-container glass">
      <div className="footer-content">
        <div>
          <h2>{language === "English" ? "DESIGNED BY" : "CONÇU PAR"}</h2>
          <p>
            {language === "English" ? "Khamais Maaroufi" : "Maaroufi Khamais"}
          </p>
        </div>
        <div>
          <h2>Navigation</h2>
          <div className="list-divider">
            <ul>
              <li>
                <a href="#about">{navbar.about[language]}</a>
              </li>
              <li>
                <a href="#experience">{navbar.experience[language]}</a>
              </li>
              <li>
                <a href="#certifications">{navbar.certifications[language]}</a>
              </li>
            </ul>
            <ul style={{ marginLeft: "10px" }}>
              <li>
                <a href="#skills">{navbar.skills[language]}</a>
              </li>
              <li>
                <a href="#projects">{navbar.projects[language]}</a>
              </li>
              <li>
                <a href="#contact">{navbar.contact[language]}</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <address>
            <p>
              <a href="tel:+21625883997">+216 25 883 997</a>
            </p>
            <p>
              <a href="mailto:khamais.sil@gmail.com">khamais.sil@gmail.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <footer>
        <p>
          &copy;{" "}
          {language === "English"
            ? currentYear + "  Khamais Maaroufi. All Rights Reserved."
            : currentYear + " Maaroufi Khamais. Tous droits réservés.."}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
