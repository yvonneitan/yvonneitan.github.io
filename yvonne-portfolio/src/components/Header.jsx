import React, { useState } from "react";
import "./Header.scss";
import home from "../assets/images/home.svg";
import skills from "../assets/images/skills.svg";
import projects from "../assets/images/projects.svg";
import contacts from "../assets/images/contacts.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import cert from "../assets/images/cert.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll smoothly to a section when a navigation link is clicked
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Mobile Menu Icon */}
        <button className="header__menu-icon" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? close : menu}
            className="tooltip-target"
            alt={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <span className="tooltip-text">{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        {/* Navigation Links */}
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <button className="header__nav-link" onClick={(e) => scrollToSection(e, "home")}>
            <img src={home} alt="Home" className="tooltip-target" />
            <span className="tooltip-text">Home</span>
          </button>
          
          <button className="header__nav-link" onClick={(e) => scrollToSection(e, "projects")}>
            <img src={projects} alt="Projects" className="tooltip-target" />
            <span className="tooltip-text">Projects</span>
          </button>
          
          <button className="header__nav-link" onClick={(e) => scrollToSection(e, "skills")}>
            <img src={skills} alt="Skills" className="tooltip-target" />
            <span className="tooltip-text">Skills</span>
          </button>
          
          <button className="header__nav-link" onClick={(e) => scrollToSection(e, "certificates")}>
            <img src={cert} alt="Certificates" className="tooltip-target" />
            <span className="tooltip-text">Badges</span>
          </button>
          
          <button className="header__nav-link header__nav-contact" onClick={(e) => scrollToSection(e, "contact")}>
            <img src={contacts} alt="Contact" className="tooltip-target" />
            <span className="tooltip-text">Contact</span>
          </button>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button className="header__dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;