import React from 'react';

const Skills = () => {
  const skills = [
    "C#", "ASP.NET Core MVC", ".NET", "React.js", 
    "Node.js", "Express.js", "MongoDB", "Docker", 
    "Git & GitHub", "Linux", "Microsoft Power BI"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;