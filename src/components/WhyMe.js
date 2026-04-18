import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: '🕒',
    title: '24/7 Support',
    desc: 'Available round the clock for any development needs. Your project gets the attention it deserves, any time.',
    color: 'var(--accent-pink)',
  },
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    desc: 'Delivering high-performance web solutions with speed and precision — efficiency without compromising quality.',
    color: 'var(--accent-purple)',
  },
  {
    icon: '🔄',
    title: 'Flexible',
    desc: 'Adapting to unique project requirements seamlessly. From startups to enterprises, solutions tailored to fit.',
    color: 'var(--accent-cyan)',
  },
  {
    icon: '🔒',
    title: 'Secure',
    desc: 'Security is built-in from day one. Best practices for authentication, data protection, and secure APIs.',
    color: '#f59e0b',
  },
  {
    icon: '📱',
    title: 'Responsive',
    desc: 'Every interface is crafted to look and work flawlessly across all devices — mobile, tablet, and desktop.',
    color: '#10b981',
  },
  {
    icon: '🚀',
    title: 'Scalable',
    desc: 'Architecture designed to grow with your product. Cloud-native, containerized, and built for scale.',
    color: '#6366f1',
  },
];

const WhyMe = () => (
  <section className="why-me" id="why-me">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Why Work With Me?
    </motion.h2>

    <div className="features-grid">
      {FEATURES.map((item, i) => (
        <motion.div
          className="feature-card"
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          whileHover={{ y: -7, scale: 1.02 }}
          style={{ '--feature-color': item.color }}
        >
          <div className="feature-icon-wrap">
            <span className="feature-icon">{item.icon}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <div className="feature-accent-line" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyMe;