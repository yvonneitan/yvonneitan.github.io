
import React from 'react';
import './About.scss'; 

const About = () => (
    <section id="about" className="about">
        <div className="about__intro text-center">
            <h1 className="about__title">Hi!</h1>
            <h2 className="about__subtitle">I am Yvonne</h2>
            <p className="about__description" data-bold="true">
                Software Developer | Developer Engineer | UX / UI Designer
            </p>
        </div>
        <div className="about__container text-center">
            <h2 className="about__subtitle--main">About Me</h2>
            <p className="about__text">
                I am a dedicated and multifaceted professional with a strong foundation in Computer Science and Big Data Systems...
            </p>
            <a href="/Yvonne_Resume.pdf" className="about__button" download>
                Download CV
            </a>
        </div>
    </section>
);

export default About;
