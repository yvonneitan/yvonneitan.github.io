import React from 'react';
import './Skills.scss';

const skillsCategories = {
  frontEnd: [
    'HTML', 'CSS', 'JavaScript', 'Typescript', 'React', 
    'UX/UI Design', 'Prototyping', 'Wireframes', 'UI Design', 
    'Graphic Design'
  ],
  backEnd: [
    'Python', 'Java', 'C', 'Node', 'Express', 
    'MySQL', 'Knex', 'Document Object Model (DOM) APIs', 
    'Web APIs', 'User Authentication', 'OAuth'
  ],
  tools: [
    'Jira', 'Figma', 'Power BI', 'Azure DevOps', 
    'GitHub', 'Git', 'GitFlow', 'Heroku', 
    'Tableau', 'GitLab'
  ],
  data: [
    'Data Analysis', 'Big Data System Management', 'Machine Learning', 
    'Data Mining', 'Data Management', 'AI', 
    'Data Visualization'
  ],
  others: [
    'E-Commerce', 'Software Development', 'Application Development', 
    'Application Design', 'Agile', 'User Research', 
    'UX Strategy', 'Personas', 'User Testing', 
    'Cloud Computing (Azure)', 'Computer Networking', 
    'Firewalls', 'Security investigations', 'System', 
    'Endpoint Security: XDR/EDR', 'System Administration: Linux', 
    'Bash', 'Data Security and Risk Mitigation'
  ]
};

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills__container text-center">
      <h2 className="skills__subtitle">Skills</h2>

      {Object.entries(skillsCategories).map(([category, skills]) => (
        <div key={category} className="skills__category">
          <h3 className="skills__category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="skills__list">
            {skills.map(skill => (
              <button className="skills__button" key={skill}>{skill}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
