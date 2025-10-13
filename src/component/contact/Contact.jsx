import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:anandgupta010106@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hi? Feel free to drop a
        message — I’ll get back to you as soon as possible.
      </p>

      <div className="contact-container">
        {/* Form */}
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
          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="contact-social">
          <a
            href="https://github.com/Anandgupta015"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/anand-gupta-b88b00261/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:anandgupta010106@gmail.com" title="Email">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
