// export default Home;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = ({ isDarkMode }) => {
  const roles = [
    "Software Developer",
    "DevOps Engineer",
    "Data Analyst",
    "UX / UI Designer",
    "Creative Thinker",
    "Problem Solver",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <section id="home" className={`home ${isDarkMode ? "dark" : "light"}`}>
      <motion.div
        className="home__content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home__subtitle">SOFTWARE ENGINEER</h1>
        <h1 className="home__subtitle home__subtitle--UX">UX/UI DESIGNER</h1>
        <h2 className="home__subtitle--role">
          I'm a{" "}
          <motion.span
            className="animated-role"
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.span>
        </h2>
        <motion.a
          href="#projects"
          className="home__button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;