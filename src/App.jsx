import { useState } from "react";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import Hero from "./sections/hero/Hero";
import Languages from "./data/Languages";
import "./App.css";
import LanguageContext from "./context/LanguageContext";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Introduction from "./sections/introduction/Introduction";
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
    setTimeout(() => setLoading(false), 5000);
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
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
