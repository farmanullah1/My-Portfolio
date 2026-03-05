import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      className="contact" id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Get In Touch</h2>
      <p>I'm currently open to new opportunities, creative ideas, and exciting projects.</p>
      
      <motion.div 
        className="social-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="mailto:farmanullahansari999@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/farmanullah-ansari" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/farmanullah1" target="_blank" rel="noreferrer">GitHub</a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;