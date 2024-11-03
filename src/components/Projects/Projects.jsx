import React from 'react';
import './Projects.scss';

const projects = [
  { name: "nitro-coffeeshop", url: "https://nitrocoffee-itan.netlify.app/", image: "/src/assets/images/projects/nitro-coffeeShop.png" },
  { name: "BandSite", url: "https://bandsite-itan.netlify.app/", image: "/src/assets/images/projects/bandsite.png" },
  { name: "BrainFlix", url: "https://brainflix-itan.netlify.app/", image: "/src/assets/images/minimalist.jpg" },
  { name: 'InStock', url: 'project4.html', image: "/src/assets/images/minimalist.jpg" },
  { name: 'ESA', url: 'project5.html', image: "/src/assets/images/minimalist.jpg" },
  { name: 'HYBRID MODEL-BRS', url: 'project6.html', image: "/src/assets/images/minimalist.jpg" },
  { name: 'NutriLi', url: 'project7.html', image: "/src/assets/images/minimalist.jpg"},
  { name: 'RANGI', url: 'project8.html', image: "/src/assets/images/minimalist.jpg" },
  { name: 'WEATHER', url: 'project9.html', image: "/src/assets/images/minimalist.jpg"},
  { name: 'TUTORLOO', url: 'project10.html', image: "/src/assets/images/minimalist.jpg" },
  { name: 'LOTTERY', url: 'project11.html', image: "/src/assets/images/minimalist.jpg" },
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__container text-center">
      <h2 className="projects__subtitle">Projects</h2>
      <div className="projects__list">
        {projects.map(project => (
          <a href={project.url} className="projects__link" key={project.name}>
            <img 
              src={project.image} 
              alt={project.name} 
              className="projects__image" 
            />
            <span className="projects__name">{project.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
