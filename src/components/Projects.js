import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "📰 Kurrent News",
      desc: "A real-time global news SPA featuring a highly robust Triple-API fallback architecture to ensure 100% deployment uptime, infinite scrolling, and dark mode.",
      tech: ["React.js", "NewsAPI", "Bootstrap"],
      live: "https://farmanullah1.github.io/Kurrent-News-Top-Headlines-Tech-Politics-Sports/",
      code: "https://github.com/farmanullah1/Kurrent-News-Top-Headlines-Tech-Politics-Sports",
      watch: "#"
    },
    {
      title: "🤝 Gadd Kaam - SkillSwap Pakistan",
      desc: "A comprehensive, secure platform for cashless skill exchanging across Pakistan, featuring CNIC verification, real-time trading, and a dedicated safe zone for women.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      live: "#",
      code: "https://github.com/farmanullah1/Gadd-Kaam-SkillSwap-Pakistan",
      watch: "#"
    },
    {
      title: "⚙️ ASP.NET Core Web API",
      desc: "A robust backend REST API demonstrating efficient Create, Read, Update, and Delete operations built with modern C# and ASP.NET Core.",
      tech: ["C#", "ASP.NET Core", "Web API"],
      live: "#",
      code: "https://github.com/farmanullah1/CRUD-App-Using-ASP-Core-Web-API",
      watch: "#"
    },
    {
      title: "✊🖐️✌️ Stone, Paper, Scissors",
      desc: "An interactive, browser-based Stone, Paper & Scissors game featuring dynamic UI updates and classic game logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://farmanullah1.github.io/Stone-Paper-Scissors-Game-HTML-CSS-JS/",
      code: "https://github.com/farmanullah1/Stone-Paper-Scissors-Game-HTML-CSS-JS",
      watch: "#"
    },
    {
      title: "❌⭕ Tic-Tac-Toe",
      desc: "A classic Tic-Tac-Toe web game featuring responsive design and state management for turn-based gameplay.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://farmanullah1.github.io/Tic-Tac-Toe-HTML-CSS-JS/",
      code: "https://github.com/farmanullah1/Tic-Tac-Toe-HTML-CSS-JS",
      watch: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="project-grid">
        {projectList.map((proj, index) => (
          <motion.div 
            className="project-card" key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="project-links">
              {proj.live !== "#" && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="btn-secondary">Live Demo</a>
              )}
              <a href={proj.watch} target="_blank" rel="noreferrer" className="btn-secondary">Watch Online</a>
              <a href={proj.code} target="_blank" rel="noreferrer" className="btn-secondary">View Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;