import React from "react";
import "./Certifications.css";
import ReactCertificate from "../../assets/Anand_Gupta_React_js_page-0001.jpg"; 
import IntroToAi from "../../assets/Anand_Gupta_introduction to AI_page-0001.jpg"; 
import JavaProgram from "../../assets/Anand_Gupta_React_js_page-0001.jpg"; 
import googlecloud from "../../assets//Anand_Gupta_essential google cloud_page-0001.jpg"; 


function Certifications() {
  const certificates = [
    {
      title: "React.js",
      issuer: "Infosys Springboard",
      date: "2024",
      link: ReactCertificate, // yahan sirf link
    },
    {
      title: "Introduction To Ai",
      issuer: "Coursera",
      date: "2023",
      link: IntroToAi,
    },
    {
      title: "Java Programming",
      issuer: "Infosys Springboard",
      date: "2024",
      link: JavaProgram,
    },
    {
      title: "Google Cloud",
      issuer: "Coursera",
      date: "2023",
      link: googlecloud,
    },
 

  ];

  return (
    <section id="certifications" className="cert-section">
      <h2>Certifications</h2>
      <p className="cert-intro">
        Here are some of my professional certifications showcasing continuous learning and skill enhancement.
      </p>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
