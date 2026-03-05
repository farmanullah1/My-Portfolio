import React from 'react';

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
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={proj.live} target="_blank" rel="noreferrer" className="btn-secondary">Live Demo</a>
              <a href={proj.watch} target="_blank" rel="noreferrer" className="btn-secondary">Watch Online</a>
              <a href={proj.code} target="_blank" rel="noreferrer" className="btn-secondary">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;