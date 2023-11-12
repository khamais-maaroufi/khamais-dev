import React, { useContext } from "react";
import "./experience.css";
import LanguageContext from "../../context/LanguageContext";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import fenix from "../../assets/Fg.png";

const Experinece = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="section-container ">
      <h1 data-aos="fade-up" className="gradient-text heading-one">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--glass-bg)",
            color: "var(--primary)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--primary)" }}
          date="2011 - present"
          iconStyle={{
            background: "var(--accent)",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="logo-timeline-conatiner">
              <img src={fenix} alt="fenix" className="logo-timeline" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experinece;
