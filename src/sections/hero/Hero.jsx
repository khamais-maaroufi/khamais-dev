import React from "react";
import "./hero.css";
import { useContext } from "react";
import Languages from "../../data/Languages";
import LanguageContext from "../../context/LanguageContext";
import photo from "../../assets/Khamais_maaroufi.jpg";
const Hero = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="hero-container">
      <div className="circle circle-medium heartbeat"></div>
      <div className="circle circle-large heartbeat"></div>
      <div className="circle circle-small bounce-top"></div>
      <div className="circle circle-very-small bounce-top"></div>
      <div className="circle circle-very-large vibrate-1"></div>
      <div className="hero-glass glass">
        {language === Languages.ENGLISH ? (
          <h1 className="heading-one" style={{ textAlign: "center" }}>
            Khamais Maaroufi
          </h1>
        ) : (
          <h1 className="heading-one" style={{ textAlign: "center" }}>
            Maaroufi Khamais{" "}
          </h1>
        )}
        <div>
          {language === Languages.ENGLISH ? (
            <h1 className="">Enthusiast Software Developer</h1>
          ) : (
            <h1 className="">Développeur logiciel passionné</h1>
          )}
        </div>
      </div>
      <div className="photo-conatiner vibrate-1">
        <img src={photo} alt="khamais-maaroufi" />
      </div>
    </div>
  );
};

export default Hero;
