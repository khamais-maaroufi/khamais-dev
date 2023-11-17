import React, { useContext } from "react";
import "./skills.css";
import java from "../../assets/tech/java.png";
import node from "../../assets/tech/nodejs.png";
import spring from "../../assets/tech/spring.png";
import sql from "../../assets/tech/sql.png";
import git from "../../assets/tech/git.png";
import docker from "../../assets/tech/docker.png";
import mongodb from "../../assets/tech/mongodb.png";
import react from "../../assets/tech/reactjs.png";
import LanguageContext from "../../context/LanguageContext";

function Skills() {
  const data = { English: "Skills", Français: "Compétences" };

  const { language } = useContext(LanguageContext);
  return (
    <section
      className="section-container gradient-text"
      style={{ marginTop: "20vh" }}
    >
      <h1 className="heading-one" style={{ marginBottom: "5vh" }}>
        {data[language]}
      </h1>
      <div className="bg-for-bigcircle" data-aos="fade-up">
        <div className="circle-center vibrate-1"></div>
        <div className="circle-wrapper">
          <div className="skill deg-0">
            <img src={java} alt="java" />
          </div>
          <div className="skill deg-45">
            <img src={spring} alt="spring" />
          </div>

          <div className="skill deg-90">
            <img src={sql} alt="sql" />
          </div>
          <div className="skill deg-135">
            <img src={git} alt="git" />
          </div>

          <div className="skill deg-180">
            <img src={docker} alt="docker" />
          </div>
          <div className="skill deg-225">
            <img src={node} alt="node" />
          </div>

          <div className="skill deg-270">
            <img src={react} alt="react" />
          </div>
          <div className="skill deg-315">
            <img src={mongodb} alt="mongodb" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
