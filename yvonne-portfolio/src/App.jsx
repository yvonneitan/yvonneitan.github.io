import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/styles/App.scss";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import VirtualAssistant from "./components/VirtualAssitant";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [loading, setLoading] = useState(true);

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Save theme preference to localStorage and update body attribute
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="app">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <div className="main-layout">
            <div className="fixed-section">
              <About isDarkMode={isDarkMode} />
            </div>
            <div className="scrollable-section">
              <Home isDarkMode={isDarkMode} />
              <Projects isDarkMode={isDarkMode} />
              <Skills isDarkMode={isDarkMode} />
              <Certificates isDarkMode={isDarkMode} />
              <VirtualAssistant isDarkMode={isDarkMode} />
              <Contact isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
