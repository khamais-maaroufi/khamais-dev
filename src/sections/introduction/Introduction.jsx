import React, { useContext } from "react";
import introductionData from "./IntroductionData";
import LanguageContext from "../../context/LanguageContext";

import "./introduction.css";

const Introduction = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="about" className="introduction-conatiner">
      <div className="circle circle-very-small vibrate-1"></div>
      <h1 data-aos="fade-up" className="gradient-text heading-one">
        Introduction
      </h1>
      <p data-aos="fade-up" className="paragraph">
        {introductionData.introduction[language]}
      </p>
    </section>
  );
};

export default Introduction;
