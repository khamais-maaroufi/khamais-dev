import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import LanguageContext from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import fb from "../../assets/links/fb.png";
import lc from "../../assets/links/lc.png";
import github from "../../assets/github.png";
import map from "../../assets/map.png";
import gmail from "../../assets/gmail.png";
import phone from "../../assets/phone.png";
const Contact = () => {
  const { language } = useContext(LanguageContext);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u0pwdo9",
        "template_l6uxlos",
        {
          from_name: form.name,
          to_name: "Visitor to my website",
          from_email: form.email,
          to_email: "khamais.sil@gmail.com",
          message: form.message,
        },
        "vty9KRcS6zVOmTvU3"
      )
      .then(
        () => {
          let Message = "";
          if (language === "English") {
            Message =
              "Thank you! I'll get back to you at my earliest convenience. 🌟";
          } else {
            Message = "Merci ! Je vous répondrai dès que possible. 🌟";
          }

          setLoading(false);
          toast.success(Message);
          setForm({
            vty9KRcS6zVOmTvU3: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          let Message = "";
          if (language === "English") {
            Message = "something went wrong. Please try again.";
          } else {
            Message = "Quelque chose s'est mal passé. Veuillez réessayer.";
          }

          setLoading(false);
          console.error(error);
          toast.error(Message);
        }
      );
  };

  return (
    <section
      id="contact"
      className="section-container"
      style={{
        marginTop: "20vh",
        height: "80vh",
        marginBottom: "40vh",
        paddingTop: "10vh",
      }}
    >
      <h1
        data-aos="fade-up"
        className="gradient-text heading-one"
        style={{ marginBottom: "10vh" }}
      >
        Contact
      </h1>
      <div data-aos="zoom-out" className="form-container glass">
        <form name="contact-me" ref={formRef} onSubmit={handleSubmit}>
          {loading ? (
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              {" "}
              <input
                value={form.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder={language === "English" ? "Your name" : "Votre nom"}
                required
              />
              <input
                value={form.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder={
                  language === "English" ? "Your email" : "Votre email"
                }
              />
              <textarea
                value={form.message}
                onChange={handleChange}
                required
                id="message"
                name="message"
                placeholder={
                  language === "English"
                    ? "write me a message..."
                    : "Écrire un message..."
                }
              />
              <button>{language === "English" ? "Send" : "Envoyer"}</button>
            </>
          )}
        </form>
        <div className="vertical-line"></div>
        <div className="contacts">
          <img src={logo} alt="khamais" className="Mylogo" />
          <div className="links">
            <a href="https://www.facebook.com/kmis.kmas" target="_blank">
              <img src={fb} alt="fb" />
            </a>
            <a href="https://github.com/khamais-maaroufi" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://leetcode.com/Khamais/" target="_blank">
              <img src={lc} alt="leetcode" />
            </a>
          </div>
          <div className="h-liner"></div>
          <address>
            <div>
              <img src={map} />{" "}
              <span>
                {language === "English" ? "Tunis, Tunisia" : "Tunis, Tunisie"}
              </span>
            </div>
            <div>
              <img src={phone} /> <span>25883997</span>
            </div>
            <div>
              <img src={gmail} /> <span>khamais.sil@gmail.com</span>
            </div>
          </address>
        </div>
      </div>
      <div data-aos="fade-up-right" className="cube">
        <div id="shape">
          <div className="front"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="back"></div>
        </div>
      </div>
      <div data-aos="fade-up-right" className="secondcube">
        <div id="shape">
          <div className="front"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="back"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
