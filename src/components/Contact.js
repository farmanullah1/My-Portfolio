import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        I'm currently open to new opportunities, creative ideas, and exciting projects. Drop a message!
      </p>
      
      <div className="contact-container">
        {/* Contact Form utilizing standard HTML mailto behavior */}
        <form action="mailto:farmanullahansari999@gmail.com" method="POST" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'center' }}>Send Message</button>
        </form>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="mailto:farmanullahansari999@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/farmanullah-ansari" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/farmanullah1" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;