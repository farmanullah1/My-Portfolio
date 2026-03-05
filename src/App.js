import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyMe />
      <Contact />
      
      <footer>
        <p>© {new Date().getFullYear()} Farmanullah Ansari. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;