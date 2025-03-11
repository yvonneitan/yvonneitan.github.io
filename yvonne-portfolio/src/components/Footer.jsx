import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Yvonne. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;