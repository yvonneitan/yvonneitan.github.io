import React from 'react'
import "./Header.scss"

const Header =() =>{
  return (

        <div className="sidebar">
            <div className="sidebar__nav">

            <p className="sidebar__nav-logo">
              Yvonne Itangishaka
            </p>
              <p href="#about" className="sidebar__nav-link" onClick={(e) => scrollToSection(e, 'about')}>
                About Me
              </p>
              <p href="#skills" className="sidebar__nav-link" onClick={(e) => scrollToSection(e, 'skills')}>
                Skills
            </p>
              <p href="#projects" className="sidebar__nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
                Projects
            </p>
            <p href="#contact" className="sidebar__nav-contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Contact
              </p>
         
            </div>
              {/* <p href="#contact" className="sidebar__nav-contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Contact
              </p> */}
         
      </div>
  
  )
}
export default Header;