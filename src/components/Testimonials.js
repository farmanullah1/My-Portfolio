import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    { name: "Ahsan Raza", role: "Project Partner", text: "Working with Farmanullah on Gadd Kaam was an incredible experience. His backend architecture skills with Node.js and MongoDB are top-notch." },
    { name: "Dr. Rahat Ali Khan", role: "Project Supervisor", text: "Farmanullah demonstrates a deep understanding of full-stack principles and consistently delivers clean, scalable code under tight deadlines." }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        What People Say
      </motion.h2>
      
      <div className="testimonial-grid">
        {reviews.map((review, i) => (
          <motion.div 
            className="testimonial-card" key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <FaQuoteLeft style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '15px' }} />
            <p>"{review.text}"</p>
            <h4 style={{ marginTop: 'auto', color: '#38bdf8' }}>{review.name}</h4>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{review.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;