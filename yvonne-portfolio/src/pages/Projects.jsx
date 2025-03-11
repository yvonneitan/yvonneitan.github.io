import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./Projects.scss";

// Import images (replace with your actual image paths)
import brainflix from "../assets/images/projects/brainflix.png";
import kwuiz from "../assets/images/projects/kwuiz.png";
import instock from "../assets/images/projects/instock.png";
import bandsite from "../assets/images/projects/bandsite.png";
import coffeeshop from "../assets/images/projects/nitro-coffeeShop.png";
import actrack from "../assets/images/projects/actrack.png";
import bella from "../assets/images/projects/bella.png";
import open from "../assets/images/open.svg";

// Animation constants
const CARD_ANIMATION_DURATION = 0.5;
const CARD_ANIMATION_DELAY = 0.2;

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "BrainFlix",
      description: "A YouTube-like App",
      tools: "React, Node.js, Express, PostgreSQL",
      link: "https://brainflix-itan-co.netlify.app/",
      image: brainflix,
    },
    {
      title: "Trivia Kwuiz",
      description: "10 Trivia knowledge quiz on different topic categories",
      tools: "React, TypeScript, CSS, SASS",
      link: "https://trivia-kwiz.netlify.app/",
      image: kwuiz,
    },
    {
      title: "InStock",
      description: "Warehouses-Inventories management system tool",
      tools: "React, Node.js, Express, MySQL",
      link: "https://instockclient-itan.netlify.app/",
      image: instock,
    },
    {
      title: "BandSite",
      description: "A music Band and fan engagement tool",
      tools: "HTML, CSS, JavaScript",
      link: "https://bandsite-itan.netlify.app/",
      image: bandsite,
    },
    {
      title: "Nitro Coffee Shop",
      description: "Your high-quality coffeeshop!",
      tools: "HTML, CSS, JavaScript",
      link: "https://nitrocoffee-itan.netlify.app/",
      image: coffeeshop,
    },
    {
      title: "AcTrack",
      description: "Activities-Tasks management tool",
      tools: "React, Node.js, Express, MySQL",
      link: "https://actrack-itan.netlify.app/",
      image: actrack,
    },
    {
      title: "Bell Changemakers",
      description: "Bell Canada community voting and engagement App",
      tools: "React, Node.js, Express, MySQL",
      link: "https://bella-changemaker-itan.netlify.app/",
      image: bella,
    },
  ];

  return (
    // Projects section displaying a list of project cards
    <section id="projects" className={`projects ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="projects__title">RECENT PROJECTS</h2>
      
      {/* Projects list container */}
      <div className="projects__list">
        {projects.map(({ title, description, tools, link, image }, index) => (
          // Individual project card container
          <motion.div
            key={index}
            className="project__card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: CARD_ANIMATION_DURATION,
              delay: index * CARD_ANIMATION_DELAY,
            }}
          >
            {/* Project image */}
            <img
              src={image}
              alt={title}
              className="project__image"
              onError={(e) => {
                e.target.src = "path/to/fallback-image.png"; // Add a fallback image
              }}
            />
            
            {/* Project content */}
            <div className="project__content">
              <h3 className="project__title">{title}</h3>
              <p className="project__description">{description}</p>
              <p className="project__tools">{tools}</p>
              
              {/* Open project icon */}
              <a
                href={link}
                className="project__open-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} project`}
              >
                <img src={open} alt="Open project" className="open-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;
