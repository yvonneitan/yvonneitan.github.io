// import React from 'react'
// import "./Header.scss"

// const Header =() =>{
//   return (

//         <div className="header">
//             <div className="header__nav">

//             <p className="header__nav-logo">
//               Yvonne Itangishaka
//             </p>
//               <p href="#about" className="header__nav-link" onClick={(e) => scrollToSection(e, 'about')}>
//                 About Me
//               </p>
//               <p href="#skills" className="header__nav-link" onClick={(e) => scrollToSection(e, 'skills')}>
//                 Skills
//             </p>
//               <p href="#projects" className="header__nav-link" onClick={(e) => scrollToSection(e, 'projects')}>
//                 Projects
//             </p>
//             <p href="#contact" className="header__nav-contact" onClick={(e) => scrollToSection(e, 'contact')}>
//                 Contact
//               </p>
         
//             </div>
//       </div>
  
//   )
// }
// export default Header;
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
