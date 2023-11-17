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
  const { language } = useContext(LanguageContext);
  return (
    <section
      className="section-container gradient-text"
      style={{ marginTop: "20vh" }}
      id="skills"
    >
      <h1 data-aos="fade-up" className="heading-one">
        {language === "English" ? "Skills" : "Compétences"}
      </h1>
      <div className="bg-for-bigcircle" data-aos="fade-up">
        <div className="circle-center vibrate-1"></div>
        <div class="circle-wrapper">
          <div class="skill deg-0">
            <img src={java} alt="java" />
          </div>
          <div class="skill deg-45">
            <img src={spring} alt="spring" />
          </div>

          <div class="skill deg-90">
            <img src={sql} alt="sql" />
          </div>
          <div class="skill deg-135">
            <img src={git} alt="git" />
          </div>

          <div class="skill deg-180">
            <img src={docker} alt="docker" />
          </div>
          <div class="skill deg-225">
            <img src={node} alt="node" />
          </div>

          <div class="skill deg-270">
            <img src={react} alt="react" />
          </div>
          <div class="skill deg-315">
            <img src={mongodb} alt="mongodb" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
