import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';

const Hero = () => {
  return (
    <motion.header 
      className='hero' id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='hero-content'>
        <motion.h1 
          className='alert'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio is Under Construction
        </motion.h1>
        
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm <span className='highlight'>Farmanullah Ansari</span> 👋
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Software Developer
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I specialize in building dynamic, user-friendly, and scalable web
          applications. Passionate about the MERN stack, ASP.NET Core, and
          engineering seamless digital experiences.
        </motion.p>
        
        <motion.a 
          href='#contact' className='btn-primary'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          Contact Me
        </motion.a>
      </div>

      <motion.div 
        className='hero-image'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <img src={profilePic} alt='Farmanullah Ansari' />
      </motion.div>
    </motion.header>
  );
};

export default Hero;