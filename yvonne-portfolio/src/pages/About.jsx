import React from "react";
import "./About.scss";
import githubIcon from "../assets/images/github.svg";
import emailIcon from "../assets/images/email.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h1 className="about__title">Yvonne I.</h1>
        <p className="about__description">
        I am passionate about crafting user-friendly experiences and building scalable solutions. 
        With a background in Computer Science and Big Data Systems, I specialize in software development, data analysis, and UI/UX design. 
        My focus is on human-centered and inclusive design, ensuring that technology is accessible and meaningful for all. 
        I thrive on solving complex problems and transforming ideas into reality, combining technical expertise with creativity to deliver impactful solutions.
    
        </p>
        {/* Social Icons */}
        <div className="about__social-icons">
          <a
            href="https://github.com/yvonneitan"
            target="_blank"
            rel="noopener noreferrer"
            className="about__social-link"
          >
            <img src={githubIcon} alt="GitHub" className="about__social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yvonneitan"
            target="_blank"
            rel="noopener noreferrer"
            className="about__social-link"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="about__social-icon"
            />
          </a>
          <a
            href="mailto:yvonneitanny@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="about__social-link"
          >
            <img src={emailIcon} alt="Email" className="about__social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;