import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Languages from "../../data/Languages";
import "./LanguageToggler.css";

const LanguageToggler = (e) => {
  const [flipped, setFlipped] = useState(false);
  const { language, languageUpdater } = useContext(LanguageContext);

  useEffect(() => {
    if (flipped) {
      document.querySelector(".custom-arrow").classList.add("animate");
    } else {
      document.querySelector(".custom-arrow").classList.remove("animate");
    }
  }, [flipped]);

  return (
    <div className="custom-select-Menu-Container">
      <div
        className="custom-selectMenu"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div>{language}</div> <span className="custom-arrow"></span>
      </div>
      {flipped && (
        <div className="custom-select-Menu">
          <div
            className="langOption"
            onClick={() => {
              if (language === Languages.ENGLISH) {
                languageUpdater(Languages.FRENCH);
              } else {
                languageUpdater(Languages.ENGLISH);
              }
              setFlipped(false);
            }}
          >
            {language === Languages.ENGLISH
              ? Languages.FRENCH
              : Languages.ENGLISH}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggler;
