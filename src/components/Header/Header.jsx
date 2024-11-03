import React from 'react';
import './Header.scss';

const Header = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">Yvonne Itangishaka</p>
        <nav className="header__nav">
          <button
            className="header__nav-link"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About Me
          </button>
          <button
            className="header__nav-link"
            onClick={(e) => scrollToSection(e, 'skills')}
          >
            Skills
          </button>
          <button
            className="header__nav-link"
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            Projects
          </button>
          <button
            className="header__nav-link header__nav-contact"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
