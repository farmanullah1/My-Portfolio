import React from 'react';
import { motion } from 'framer-motion';
import cvFile from '../assets/Farmanullah Ansari CV - All.pdf';

const About = () => {
  return (
    <motion.section 
      className="about" id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        I specialize in building dynamic, user-friendly, and scalable web applications. 
        With a strong foundation in modern frameworks and scalable architectures, I engineer seamless digital experiences that solve real-world problems.
      </p>
      <div className="about-buttons">
        {/* 'download' attribute forces the browser to save the file */}
        <a href={cvFile} download="Farmanullah_Ansari_CV.pdf" className="btn-primary">
          Download My CV
        </a>
        <a href="#contact" className="btn-secondary">
          Hire Me
        </a>
      </div>
    </motion.section>
  );
};

export default About;