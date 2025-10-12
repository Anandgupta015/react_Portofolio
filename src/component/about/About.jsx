import React from "react";
import "./About.css";
import profileImg from "../../assets/mern.png"; // Make sure path is correct

function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "DSA", level: 85 },
    { name: "JAVA", level: 85 },
    { name: "SQL", level: 85 },
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
            I am a MERN stack developer with strong problem-solving skills in DSA,
            especially arrays and strings. I love building scalable web applications
            and exploring new technologies.
          </p>
          <p>
            My goal is to create user-friendly applications with clean, efficient code
            while continuously learning and improving my skills.
          </p>

          <h3>Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
