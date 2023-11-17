import React from "react";

const Card = (props) => {
  return (
    <div data-aos="slide-up" className="certification-card glass">
      <figure>
        <img src={props.image} alt={props.alt} />
      </figure>
      <a href={props.url} className="redirect-to-certificate" target="_blank">
        {" "}
        {props.message} <span>&#8599;</span>
      </a>
    </div>
  );
};

export default Card;
