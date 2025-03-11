import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = ({ isDarkMode }) => {
  // Define skills categories and skills list
  const skills = {
    frontEnd: [
      "HTML",
      "CSS",
      "JavaScript",
      "Typescript",
      "React",
      "UX/UI Design",
      "Prototyping",
      "Wireframes",
      "UI Design",
      "Graphic Design",
    ],
    backEnd: [
      "Python",
      "Java",
      "C",
      "Node",
      "Express",
      "MySQL",
      "Knex",
      "Document Object Model (DOM) APIs",
      "Web APIs",
      "User Authentication",
      "OAuth",
    ],
    tools: [
      "Jira",
      "Figma",
      "Power BI",
      "Azure DevOps",
      "GitHub",
      "Git",
      "GitFlow",
      "Heroku",
      "Tableau",
      "GitLab",
    ],
    data: [
      "Data Analysis",
      "Big Data System Management",
      "Machine Learning",
      "Data Mining",
      "Data Management",
      "AI",
      "Data Visualization",
    ],
    others: [
      "E-Commerce",
      "Software Development",
      "Application Development",
      "Application Design",
      "Agile",
      "User Research",
      "UX Strategy",
      "Personas",
      "User Testing",
      "Cloud Computing (Azure)",
      "Computer Networking",
      "Firewalls",
      "Security investigations",
      "System",
      "Endpoint Security: XDR/EDR",
      "System Administration: Linux",
      "Bash",
      "Data Security and Risk Mitigation",
    ],
  };

  return (
    // Skills section
    <section id="skills" className={`skills ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="skills__title">TECHNICAL AND SOFT SKILLS</h2>

      <div className="skills__categories">
        {/* Map over skills categories */}
        {Object.entries(skills).map(([category, skillsList], index) => (
          <motion.div
            key={index}
            className="skills__category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="skills__category-title">{category}</h3>

            <div className="skills__list">
              {/* Map over individual skills within each category */}
              {skillsList.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill__item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
