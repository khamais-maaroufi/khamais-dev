import { useState } from "react";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import Hero from "./sections/hero/Hero";
import Languages from "./data/Languages";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "./context/LanguageContext";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Introduction from "./sections/introduction/Introduction";
import Experinece from "./sections/experience/Experinece";
import Certification from "./sections/certifications/Certification";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [language, setLanguage] = useState(Languages.ENGLISH);

  useEffect(() => {
    const lang = localStorage.getItem("language-portfolio-khamais");

    if (lang) {
      setLanguage(localStorage.getItem("language-portfolio-khamais"));
    } else {
      localStorage.setItem("language-portfolio-khamais", Languages.ENGLISH);
    }
  }, []);

  // i declared a global language state across the app for english and french
  //and i used local storage browser api to add persistence over the browser refresh

  function languageUpdater(s) {
    setLanguage(s);
    localStorage.setItem("language-portfolio-khamais", s);
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
    AOS.init({
      duration: 2000,
    });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <LanguageContext.Provider value={{ language, languageUpdater }}>
      <div style={{ paddingTop: "5%" }}>
        <NavBar />
        <Hero />
        <Introduction />
        <Experinece />
        <Certification />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ToastContainer />
    </LanguageContext.Provider>
  );
}

export default App;
