import React from 'react'
import "./Header.scss"

const Header =() =>{
  return (

        <div className="header">
            <div className="header__nav">

            <p className="header__nav-logo">
              Yvonne Itangishaka
            </p>
              <p href="#about" className="header__nav-link" onClick={(e) => scrollToSection(e, 'about')}>
                About Me
              </p>
              <p href="#skills" className="header__nav-link" onClick={(e) => scrollToSection(e, 'skills')}>
                Skills
            </p>
              <p href="#projects" className="header__nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
                Projects
            </p>
            <p href="#contact" className="header__nav-contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Contact
              </p>
         
            </div>
      </div>
  
  )
}
export default Header;