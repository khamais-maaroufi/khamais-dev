import React, { useContext } from "react";
import "./certification.css";
import certificationData from "./certificationData";
import LanguageContext from "../../context/LanguageContext";
import Card from "./Card";
import { aws, front, java1, java2, js, RWD } from "../../assets/certifications";
const Certification = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      className=" section-container"
      style={{ marginTop: "20vh" }}
      id="certifications"
    >
      <h1 data-aos="fade-up" className="heading-one  gradient-text">
        Certifications
      </h1>
      <div className="certification-container">
        <Card
          image={java1}
          alt="java-one-mooc"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://certificates.mooc.fi/validate/rp5xn54hw2q"
        />
        <Card
          image={java2}
          alt="java-one-mooc"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://certificates.mooc.fi/validate/giso278bm4"
        />
        <Card
          image={js}
          alt="javascript-freecodecamp"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://www.freecodecamp.org/certification/Khamais-Maaroufi/javascript-algorithms-and-data-structures"
        />
        <Card
          image={RWD}
          alt="responsive-web-design-freecodecamp"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://www.freecodecamp.org/certification/Khamais-Maaroufi/responsive-web-design"
        />
        <Card
          image={front}
          alt="front-end-development-libraries-freecodecamp"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://www.freecodecamp.org/certification/Khamais-Maaroufi/front-end-development-libraries"
        />
        <Card
          image={aws}
          alt="aws"
          message={
            language === "English"
              ? "Show credential"
              : "Afficher le certificat"
          }
          url="https://www.credly.com/badges/80d81643-902a-472e-968e-e355842fc4bd/linked_in_profile"
        />
      </div>
      <div className="circle circle-medium heartbeat"></div>
      <div className="circle circle-large heartbeat"></div>
      <div className="circle circle-small bounce-top"></div>
    </section>
  );
};

export default Certification;
