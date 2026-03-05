import React from 'react';
import { motion } from 'framer-motion';

const WhyMe = () => {
  const features = [
    { icon: "🕒", title: "24/7 Support", desc: "Available round the clock to assist with any development needs. Your project gets the attention it deserves, anytime!" },
    { icon: "⚡", title: "Fast & Reliable", desc: "Delivering high-performance web solutions with speed and precision, ensuring efficiency without compromising quality." },
    { icon: "🔄", title: "Flexible", desc: "Adapting to unique project requirements with seamless flexibility. From startups to enterprises, I tailor solutions that fit." }
  ];

  return (
    <section className="why-me" id="why-me">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Me?
      </motion.h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <motion.div 
            className="feature-card" key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3>{item.icon} {item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;