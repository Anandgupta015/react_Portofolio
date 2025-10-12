import React from "react";
import "./Project.css";

// Example project images (place in public folder)
const projects = [
  {
    title: "Expense Tracker",
    description: "A full-stack MERN app to track personal expenses with analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/expense.png",
    github: "https://github.com/Anandgupta015/expense-tracker",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "CSS", "JavaScript"],
    img: "/portfolio.png",
    github: "https://github.com/Anandgupta015/portfolio",
    live: "#"
  },
  {
    title: "Todo App",
    description: "MERN stack todo app with user authentication and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/ToDo_project_mern",
    live: "#"
  },
    {
    title: "Todo App",
    description: "MERN stack todo app with user authentication and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/ToDo_project_mern",
    live: "#"
  },
    {
    title: "Todo App",
    description: "MERN stack todo app with user authentication and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/ToDo_project_mern",
    live: "#"
  },
    {
    title: "Todo App",
    description: "MERN stack todo app with user authentication and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/todo.png",
    github: "https://github.com/Anandgupta015/ToDo_project_mern",
    live: "#"
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
