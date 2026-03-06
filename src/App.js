import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  const [theme, setTheme] = useState('dark');

  // Applies the theme to the body element for global styling
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Certifications />
      <WhyMe />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;