import React, { useContext } from "react";
import "./experience.css";
import LanguageContext from "../../context/LanguageContext";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import fenix from "../../assets/Fenix-Future-Dev.jpg";
import hg from "../../assets/Hg.png";
import Mg from "../../assets/Mg.png";
import Ng from "../../assets/Ng.png";
import experienceData from "./experineceData";
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
          date={language == "English" ? "June 2022" : "Juin 2022"}
          iconStyle={{
            background: "var(--accent)",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="logo-timeline-conatiner">
              <img
                src={Mg}
                alt="université-tunis-manar"
                className="logo-timeline"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            {experienceData.university.title[language]}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experienceData.university.location[language]}
          </h4>
          <p>{experienceData.university.description[language]}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--glass-bg)",
            color: "var(--primary)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--primary)" }}
          date={
            language == "English"
              ? "February 2022 - June 2022"
              : "Février 2022 - Juin 2022"
          }
          iconStyle={{
            background: "var(--accent)",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="logo-timeline-conatiner">
              <img src={hg} alt="horizondata" className="logo-timeline" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            {experienceData.horizondata.title[language]}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experienceData.horizondata.location[language]}
          </h4>
          <p>{experienceData.horizondata.description[language]}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--glass-bg)",
            color: "var(--primary)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--primary)" }}
          date={
            language === "English"
              ? "August 2022 - October 2022"
              : "Août 2022 - Octobre 2022"
          }
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
          <h3 className="vertical-timeline-element-title">
            {experienceData.fenix.title[language]}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experienceData.fenix.location[language]}
          </h4>
          <p>{experienceData.fenix.description[language]}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--glass-bg)",
            color: "var(--primary)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--primary)" }}
          date={
            language == "English"
              ? "February 2023 - May 2023"
              : "Février 2023 - Mai 2023"
          }
          iconStyle={{
            background: "var(--accent)",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <div className="logo-timeline-conatiner">
              <img src={Ng} alt="next-consult" className="logo-timeline" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            {experienceData.next.title[language]}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experienceData.next.location[language]}
          </h4>
          <p>{experienceData.next.description[language]}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experinece;
