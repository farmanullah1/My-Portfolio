import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaPython, FaAws, FaLinux, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiTerraform } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb"; 
import { BiNetworkChart } from "react-icons/bi"; 
import { BsBarChartFill } from "react-icons/bs"; 

const Skills = () => {
  const skills = [
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "ASP.NET Core", icon: <BiNetworkChart /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Power BI", icon: <BsBarChartFill /> }
  ];

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
        className="marquee-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="marquee-track">
          {/* We render the list twice to create a seamless infinite scroll loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card-scroll">
              <div className="skill-icon-large">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;