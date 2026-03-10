import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import profilePic from '../assets/profile.png';
import cvFile from '../assets/Farmanullah Ansari CV - All.pdf';

const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'ASP.NET Core Developer',
  'Cloud & DevOps Enthusiast',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const targetRole = ROLES[roleIndex];
    let timeout;
    if (isTyping) {
      if (displayedRole.length < targetRole.length) {
        timeout = setTimeout(() => setDisplayedRole(targetRole.slice(0, displayedRole.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1800);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, isTyping, roleIndex]);

  return (
    <motion.header
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background mesh / particle orbs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--purple" />
        <div className="hero-orb hero-orb--pink" />
        <div className="hero-orb hero-orb--cyan" />
        <div className="hero-grid-lines" />
      </div>

      {/* ─── Inner layout wrapper ─── */}
      <div className="hero-inner">

        {/* ── LEFT: Text Content ── */}
        <div className="hero-content">

          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="blink-dot" />
            Available for new opportunities
          </motion.div>

          {/* Greeting */}
          <motion.h1
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
            <span className="hero-name highlight">Farmanullah Ansari</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.h3
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span className="role-prefix">I'm a </span>
            <span className="role-text">{displayedRole}</span>
            <span className="typing-cursor" />
          </motion.h3>

          {/* Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            I engineer dynamic, user-friendly, and scalable web applications. Passionate about
            the MERN stack, ASP.NET Core, cloud computing, and building seamless digital experiences.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            {[
              { num: '3+', label: 'Years Coding' },
              { num: '10+', label: 'Projects Built' },
              { num: '9+', label: 'Certifications' },
            ].map((stat, i) => (
              <motion.div
                className="stat-item"
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#contact" className="btn-primary">
              <FaEnvelope /> Hire Me
            </a>
            <a href={cvFile} download="Farmanullah_Ansari_CV.pdf" className="btn-secondary">
              <FaDownload /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            {[
              { href: 'https://github.com/farmanullah1', icon: <FaGithub />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/farmanullah-ansari', icon: <FaLinkedin />, label: 'LinkedIn' },
              { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {s.icon}
              </motion.a>
            ))}
            <span className="hero-social-label">Let's connect</span>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Image ── */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.5, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, type: 'spring', stiffness: 80 }}
        >
          {/* Floating tech badge decorations */}
          <motion.div
            className="hero-float-badge hero-float-badge--tl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="hero-float-badge hero-float-badge--br"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            🌩️ AWS
          </motion.div>
          <motion.div
            className="hero-float-badge hero-float-badge--tr"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            🟢 Node.js
          </motion.div>

          <div className="hero-image-wrap">
            {/* Outer spinning dashed ring */}
            <div className="hero-ring hero-ring--outer" />
            {/* Inner glowing ring */}
            <div className="hero-ring hero-ring--inner" />
            <div className="hero-image">
              <img src={profilePic} alt="Farmanullah Ansari" />
            </div>
          </div>
        </motion.div>

      </div>{/* /hero-inner */}

      {/* Scroll cue */}
      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </motion.div>

    </motion.header>
  );
};

export default Hero;