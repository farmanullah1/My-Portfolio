import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I specialize in building dynamic, user-friendly, and scalable web applications. 
        With a strong foundation in modern frameworks and scalable architectures, I engineer seamless digital experiences that solve real-world problems.
      </p>
      <div className="about-buttons">
        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn-primary">My CV</a>
        <a href="#contact" className="btn-secondary">Hire Me</a>
      </div>
    </section>
  );
};

export default About;