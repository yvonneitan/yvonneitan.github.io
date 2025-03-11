// export default Contact;
import React, { useState } from "react";
import "./Contact.scss";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <section id="contact" className={`contact ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="contact__title">LET'S CONNECT</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
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
          required
        />
        <button type="submit" className="contact__button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;