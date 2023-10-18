import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [skills, setSkills] = useState([
    { name: 'HTML5', score: 100, description: 'Strong knowledge of HTML5.' },
    { name: 'CSS3', score: 100, description: 'Proficient in CSS3 styling and layout.' },
    { name: 'JavaScript', score: 75, description: 'Skilled in JavaScript programming.' },
    { name: 'React.js', score: 70, description: 'Experienced in React.js development.' },
    { name: 'Node.js', score: 50, description: 'Familiar with Node.js for server-side development.' },
    // Add more skills as needed
  ]);

  // Add a CSS class to animate skill bars on initial load
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
      }, index * 200);
    });
  }, []);

  // Function to handle skill score changes
  const handleScoreChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].score = event.target.value;
    setSkills(newSkills);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
              <div className="skill-bar">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={skill.score}
                  onChange={(e) => handleScoreChange(index, e)}
                />
                <div className="skill-score">
                  {skill.score}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
