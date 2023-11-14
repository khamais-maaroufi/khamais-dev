import React from "react";
import "./skills.css";
import java from "../../assets/tech/java.png";
function Skills() {
  return (
    <section
      className="section-container gradient-text"
      style={{ marginTop: "20vh" }}
    >
      <h1 data-aos="fade-up" className="heading-one">
        Skills
      </h1>
      <div className="bg-for-bigcircle" data-aos="fade-up">
        <div className="circle-center vibrate-1"></div>
        <div class="circle-wrapper">
          <div class="skill deg-0">
            <img src={java} alt="java" />
          </div>
          <div class="skill deg-45">
            <img src={java} alt="java" />
          </div>

          <div class="skill deg-90">
            <img src={java} alt="java" />
          </div>
          <div class="skill deg-135">
            <img src={java} alt="java" />
          </div>

          <div class="skill deg-180">
            <img src={java} alt="java" />
          </div>
          <div class="skill deg-225">
            <img src={java} alt="java" />
          </div>

          <div class="skill deg-270">
            <img src={java} alt="java" />
          </div>
          <div class="skill deg-315">
            <img src={java} alt="java" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
