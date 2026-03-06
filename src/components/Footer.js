import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Added the highlight class here to make the footer logo gradient */}
        <div className="footer-logo highlight">
          Farmanullah Ansari
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} All Rights Reserved. Built with React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;