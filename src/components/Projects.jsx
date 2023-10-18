import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container row">
        <h2>Projects</h2>
        <div className="project col-6">
          <h3>Project 1</h3>
          <p>this is project web application for users ...</p>
           <img src="../images/webdev.jpg" alt="dd" />
        </div>
        <div className="project col-6">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <img src="../images/webdev.jpg" alt="dd" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
