import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  { title:'Gadd Kaam — SkillSwap Pakistan', emoji:'🤝', desc:'A comprehensive, secure platform for cashless skill exchanging across Pakistan, featuring CNIC verification, real-time trading, and a dedicated safe zone for women.', tech:['MongoDB','Express.js','React.js','Node.js'], live:'https://gadd-kaam-skillswap-pakistan.netlify.app/', code:'https://github.com/farmanullah1/Gadd-Kaam-SkillSwap-Pakistan', featured:true },
  { title:'Kurrent News', emoji:'📰', desc:'A real-time global news SPA featuring a Triple-API fallback architecture for 100% uptime, infinite scrolling, and dark mode.', tech:['React.js','NewsAPI','Bootstrap'], live:'https://farmanullah1.github.io/Kurrent-News-Top-Headlines-Tech-Politics-Sports/', code:'https://github.com/farmanullah1/Kurrent-News-Top-Headlines-Tech-Politics-Sports' },
  { title:'TextUtils Studio', emoji:'✏️', desc:'Premium browser-based text manipulation toolkit with a "Deep Cyber Glass" UI offering 100+ formatting, extraction, and cryptography tools.', tech:['React.js','Bootstrap'], live:'https://farmanullah1.github.io/TextUtils-React.js/', code:'https://github.com/farmanullah1/TextUtils-React.js' },
  { title:'ASP.NET Core Web API', emoji:'⚙️', desc:'A robust REST API demonstrating efficient CRUD operations built with modern C# and ASP.NET Core best practices.', tech:['C#','ASP.NET Core','Web API'], live:'', code:'https://github.com/farmanullah1/CRUD-App-Using-ASP-Core-Web-API' },
  { title:'Stone, Paper, Scissors', emoji:'✊', desc:'An interactive browser-based game featuring dynamic UI updates and classic game logic with a polished design.', tech:['HTML','CSS','JavaScript'], live:'https://farmanullah1.github.io/Stone-Paper-Scissors-Game-HTML-CSS-JS/', code:'https://github.com/farmanullah1/Stone-Paper-Scissors-Game-HTML-CSS-JS' },
  { title:'Tic-Tac-Toe', emoji:'❌', desc:'Classic Tic-Tac-Toe web game featuring responsive design and clean state management for turn-based gameplay.', tech:['HTML','CSS','JavaScript'], live:'https://farmanullah1.github.io/Tic-Tac-Toe-HTML-CSS-JS/', code:'https://github.com/farmanullah1/Tic-Tac-Toe-HTML-CSS-JS' },
];
const FILTERS = ['All','React.js','.NET','Node.js','Web Basics'];
const match = (p,f) => {
  if (f==='All')        return true;
  if (f==='.NET')       return p.tech.includes('C#') || p.tech.includes('ASP.NET Core');
  if (f==='Web Basics') return p.tech.includes('HTML');
  return p.tech.includes(f);
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = PROJECTS.filter(p => match(p, filter));

  return (
    <section className="projects" id="projects">
      <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        Featured Projects
      </motion.h2>
      <div className="filter-container">
        {FILTERS.map(f => (
          <motion.button key={f} className={`filter-btn${filter===f?' active':''}`}
            onClick={() => setFilter(f)} whileHover={{ scale:1.06 }} whileTap={{ scale:.94 }}>
            {f}
          </motion.button>
        ))}
      </div>
      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map(proj => (
            <motion.div
              className={`project-card${proj.featured?' project-card--featured':''}`}
              key={proj.title} layout
              initial={{ opacity:0, scale:.88 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.88 }}
              transition={{ duration:.32 }} whileHover={{ y:-9 }}
            >
              {proj.featured && <div className="project-featured-badge">⭐ Featured</div>}
              <div className="project-emoji">{proj.emoji}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tech-stack">{proj.tech.map((t,i) => <span key={i}>{t}</span>)}</div>
              <div className="project-links">
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="project-link project-link--live"><FaExternalLinkAlt /> Live Demo</a>}
                {proj.code && <a href={proj.code} target="_blank" rel="noreferrer" className="project-link project-link--code"><FaGithub /> Source Code</a>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
export default Projects;