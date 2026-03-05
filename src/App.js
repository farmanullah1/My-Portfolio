import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">FA.</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="about">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Farmanullah Ansari</span> 👋</h1>
          <h3>Full-Stack Software Developer</h3>
          <p>
            I specialize in building dynamic, user-friendly, and scalable web applications. 
            Passionate about the MERN stack, ASP.NET Core, and engineering seamless digital experiences.
          </p>
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <h3>📰 Kurrent News</h3>
            <p>A real-time global news SPA featuring a highly robust Triple-API fallback architecture to ensure 100% deployment uptime, infinite scrolling, and dark mode.</p>
            <div className="tech-stack">
              <span>React.js</span> <span>NewsAPI</span> <span>Bootstrap</span>
            </div>
            <a href="https://farmanullah1.github.io/Kurrent-News-Top-Headlines-Tech-Politics-Sports/" target="_blank" rel="noreferrer" className="btn-secondary">Live Demo</a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>🤝 Gadd Kaam - SkillSwap</h3>
            <p>A comprehensive platform for skill exchanging across Pakistan. Built with a robust backend architecture and dynamic frontend rendering.</p>
            <div className="tech-stack">
              <span>MongoDB</span> <span>Express.js</span> <span>React.js</span> <span>Node.js</span>
            </div>
            <a href="#" className="btn-secondary" style={{opacity: 0.5, cursor: 'not-allowed'}}>In Development</a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Let's Connect</h2>
        <p>I'm currently open to new opportunities, creative ideas, and exciting projects.</p>
        <div className="social-links">
          <a href="https://github.com/farmanullah1" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:farmanullahansari908@gmail.com">Email Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Farmanullah Ansari. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;