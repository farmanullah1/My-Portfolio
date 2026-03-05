import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    "C#", "ASP.NET Core MVC", ".NET", "React.js", 
    "Node.js", "Express.js", "MongoDB", "Docker", 
    "Git & GitHub", "Linux", "Microsoft Power BI"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Makes skills pop in one by one
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill, index) => (
          <motion.span key={index} className="skill-badge" variants={itemVariants}>
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;