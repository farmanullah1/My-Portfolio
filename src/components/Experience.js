import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "PS CODERS",
      date: "Jul 2024 - Oct 2024",
      bullets: [
        "Engineered dynamic and responsive front-end interfaces using modern web technologies.",
        "Collaborated with cross-functional teams to optimize UI/UX and improve overall application performance.",
        "Ensured cross-browser compatibility and adhered to clean code architecture and standard development workflows."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "Cloud Computing Fellow",
      company: "ACM UET Lahore",
      date: "Jun 2024 - Aug 2024",
      bullets: [
        "Gained hands-on experience in cloud infrastructure, DevOps practices, and server management.",
        "Deployed scalable web applications leveraging AWS services, including Elastic Beanstalk and EC2.",
        "Implemented containerized environments using Docker, focusing on port mapping, volume mounting, and multi-container NGINX architectures."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "BS Software Engineering",
      company: "University of Sindh",
      date: "Jan 2022 – Dec 2025",
      bullets: [
        "Mastered core computer science principles, including Data Structures, Object-Oriented Programming (OOP), and full-stack methodologies.",
        "Developed 'Gadd Kaam – SkillSwap Pakistan' as a Final Year Project: a secure, MERN-stack platform for cashless skill trading featuring CNIC verification and real-time messaging.",
        "Actively participated in continuous learning, earning multiple certifications in .NET, React.js, and Cloud Fundamentals."
      ],
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section className="experience" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            className="timeline-item" key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-icon">
              {exp.icon}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <h4 className="highlight">{exp.company}</h4>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;