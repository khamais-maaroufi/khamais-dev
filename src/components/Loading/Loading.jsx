import React from "react";
import "./loading.css";
import logo from "../../assets/logo.png";
const Loading = () => {
  return (
    <div className="loading-conatainer">
      <div className="pl">
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__dot"></div>
        <div className="pl__text">
          <img src={logo}></img>Loading…
        </div>
      </div>
    </div>
  );
};

export default Loading;
