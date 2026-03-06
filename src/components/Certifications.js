import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    { title: "Complete ASP.NET Core MVC 6", issuer: "Udemy", date: "Jan 2026" },
    { title: "C# 12 Mastery: Console to Web", issuer: "Udemy", date: "Jan 2026" },
    { title: "React Crash Course: Zero to Hero", issuer: "Udemy", date: "Mar 2026" },
    { title: "Docker MasterClass: Compose & SWARM", issuer: "Udemy", date: "Dec 2025" },
    { title: "Google Prompting Essentials", issuer: "Google", date: "Jul 2025" },
    { title: "Computer Networks Fundamentals", issuer: "Udemy", date: "Jul 2025" },
    { title: "Crash Course on Python", issuer: "Google", date: "Jul 2025" },
    { title: "Introduction to Git and GitHub", issuer: "Google", date: "Jul 2025" },
    { title: "Microsoft Power BI - Adv Guide", issuer: "Udemy", date: "Mar 2026" }
  ];

  return (
    <section className="certifications" id="certifications">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        Licenses & Certifications
      </motion.h2>

      <div className="cert-grid">
        {certs.map((cert, i) => (
          <motion.div 
            className="cert-card" key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <FaAward className="cert-icon" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;