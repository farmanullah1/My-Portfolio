import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    { title: "Deploying Dual NGINX Servers on AWS EC2 with Docker", date: "September 2025", desc: "A deep dive into container isolation, volume mounting, and static content serving using Docker on an EC2 instance.", link: "https://www.linkedin.com/in/farmanullah-ansari" },
    { title: "The Future of Cashless Bartering in Pakistan", date: "March 2026", desc: "How we built Gadd Kaam using the MERN stack to digitize traditional skill swapping and combat economic inflation.", link: "https://www.linkedin.com/in/farmanullah-ansari" }
  ];

  return (
    <section className="blog" id="blog">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Insights & Articles
      </motion.h2>

      <div className="blog-grid">
        {articles.map((art, i) => (
          <motion.div 
            className="blog-card" key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 'bold' }}>{art.date}</span>
            <h3 style={{ marginTop: '10px' }}>{art.title}</h3>
            <p>{art.desc}</p>
            <a href={art.link} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold', marginTop: 'auto' }}>Read More →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;