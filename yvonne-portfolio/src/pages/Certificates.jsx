// export default Certificates;
import React, { useState } from "react";
import "./Certificates.scss";
import bellas from "../assets/images/projects/bellas.png";
import diploma from "../assets/images/diploma.png";
import awscert from "../assets/images/awscert.png";
import powerBI from "../assets/images/powerBI.png";
import ops from "../assets/images/ops.png";
import lock from "../assets/images/lock.svg"; // Lock icon for restricted access
import open from "../assets/images/open.svg"; // Open icon for linked certificates

const Certificates = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear any previous error
    setError("");

    // Simulate access request
    // Grant access after a delay
    setMessage("Access granted!");
    setTimeout(() => {
      setAccessGranted(true); 
    }, 3000);
  };

  const certificates = [
    {
      title: "Software Engineer Certificate",
      image: diploma,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7261108506101968896/",
    },
    {
      title: "Bell Changemakers Hackathon : First Place Award Winner",
      image: bellas,
      link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7255334263632416768",
    },
    {
      title: "Hackathon: Employee Engagement Tool Certificate : First Place Award Winner",
      image: ops,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7051963309348040704",
    },
    {
      title: "Power BI Certificate",
      image: powerBI,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7255334264639045632",
    },
    {
      title: "AWS Certificate",
      image: awscert,
      link: null, // No link for this certificate
    },
  ];

  return (
    <section id="certificates" className={`certificates ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="certificates__title">ACHIEVEMENTS</h2>
      {!accessGranted ? (
        <div className="certificates__request">
          <p className="certificates__message">
            Please request access to view my certificates.
          </p>
          <form onSubmit={handleSubmit} className="certificates__form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="certificates__error">{error}</p>}
            <button type="submit" className="certificates__button">
              Request Access
            </button>
          </form>
          {message && <p className="certificates__message">{message}</p>}
        </div>
      ) : (
        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate__card">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate__image"
              />
              <h3 className="certificate__title">{certificate.title}</h3>
              {certificate.link && (
                <a
                  href={certificate.link}
                  className="certificate__open-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={open} alt="Open certificate" className="open-icon" />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Certificates;