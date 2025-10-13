import React from "react";
import "./About.css";
import profileImg from "../../assets/mern.png"; // ensure path is correct

function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "HTML/CSS",
    "DSA",
    "Java",
    "SQL"
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hi! I’m Anand Gupta, a B.Tech student specializing in Computer Science.
            I am a MERN stack developer with strong problem-solving skills in DSA.
            I love building scalable web applications and exploring new technologies.
          </p>
          <p>
            My goal is to create user-friendly applications with clean, efficient code
            while continuously learning and improving my skills.
          </p>

          <h3>Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
