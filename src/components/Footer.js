import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#38bdf8' }}>
          Farmanullah Ansari
        </div>
        <div className="footer-links" style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} All Rights Reserved. Built with React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;