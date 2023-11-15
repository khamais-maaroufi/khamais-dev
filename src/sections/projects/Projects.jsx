import "./projects.css";
import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import projectsData from "./projectsData";
import { GlassCard } from "../../components/GlassCard/GlassCard";
const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section
      id="projects"
      className="section-container "
      style={{ marginTop: "20vh" }}
    >
      <h1 data-aos="fade-up" className="heading-one gradient-text">
        {" "}
        {projectsData.title[language]}
      </h1>
      <p data-aos="fade-up" className="paragraph">
        {projectsData.description[language]}
      </p>
      <div className="projects-cards-container">
        {projectsData.projects.map((item) => {
          return <GlassCard project={item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
