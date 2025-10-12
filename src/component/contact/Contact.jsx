import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',       // EmailJS service ID
      'YOUR_TEMPLATE_ID',      // EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY'        // EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Try again later.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn-send">Send Message</button>
        </form>

        <div className="contact-social">
          <a href="https://github.com/Anandgupta015" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/AnandGupta" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="mailto:anand@example.com"><FaEnvelope size={30} /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
