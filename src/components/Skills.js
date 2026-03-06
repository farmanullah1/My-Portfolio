import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaPython, FaAws, FaLinux, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiTerraform } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb"; // Reliable C# Icon
import { BiNetworkChart } from "react-icons/bi"; // Used as a clean icon for .NET / Web APIs
import { BsBarChartFill } from "react-icons/bs"; // Perfect generic icon for Power BI

const Skills = () => {
  const skills = [
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "ASP.NET Core", icon: <BiNetworkChart /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Power BI", icon: <BsBarChartFill /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
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
            <span className="skill-icon">{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;