import React from "react";
import "./Project.css";

// Example project images (place in public folder)
const projects = [
  {
    title: "Expense Tracker",
    description: "A full-stack MERN app to track personal expenses with analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/expense.png",
    github: "https://github.com/Anandgupta015/Expense_Tracker",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "CSS", "JavaScript"],
    img: "/image.png",
    github: "https://github.com/Anandgupta015/react_Portofolio",
    live: "#"
  },
  {
    title: "BackGround changer",
    description: "React app to change background dynamically.",
    tech: ["React"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/Background-changer",
    live: "anandgupta015.github.io/Background-changer/"
  },

    {
    title: "E-commerse Website",
    description: "MERN stack with user login and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/e-commerse",
    live: "#"
  },
    {
    title: "Digital Clock",
    description: "Html,CSS and JavaScript project",
    tech: ["HTML", "CSS","JavaScript"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015?tab=repositories",
    live: "https://anandgupta015.github.io/Digital-clock/"
  }
  
];

function Project() {
  return (
    <section id="project" className="project-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-image" style={{ backgroundImage: `url(${proj.img})` }}>
              <div className="overlay">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span className="tech-badge" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
