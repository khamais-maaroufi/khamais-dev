import React, { useContext } from "react";
import "./GlassCard.css";
import LanguageContext from "../../context/LanguageContext";
import eye from "../../assets/eye.png";
import github from "../../assets/github.png";
export const GlassCard = (props) => {
  const { language } = useContext(LanguageContext);

  return (
    <div data-aos="zoom-out" className="box" key={props.index}>
      <span></span>
      <div className="content">
        <div className="placeholder"></div>
        <figure>
          <img
            src={props.project.imageUrl}
            alt={props.project.title[language]}
          />
        </figure>
        <h2>{props.project.title[language]}</h2>
        <p>{props.project.desc[language]}</p>
        <div className="icons-container">
          <a href={props.project.githubUrl} target="_blank">
            <img src={github} />
          </a>
          <a href={props.project.demoUrl} target="_blank">
            <img src={eye} />
          </a>
        </div>
      </div>
    </div>
  );
};
