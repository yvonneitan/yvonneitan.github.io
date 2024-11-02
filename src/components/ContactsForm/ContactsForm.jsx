import React from 'react';
import './ContactsForm.scss';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__subtitle">Contact</h2>
        <form id="contactForm" className="contact-section__form" onSubmit={handleSubmit}>
          <div className="contact-section__form-group">
            <label htmlFor="fname" className="contact-section__label">First Name:</label>
            <input type="text" id="fname" name="fname" className="contact-section__input" required />
          </div>
          <div className="contact-section__form-group">
            <label htmlFor="lname" className="contact-section__label">Last Name:</label>
            <input type="text" id="lname" name="lname" className="contact-section__input" required />
          </div>
          <div className="contact-section__form-group">
            <label htmlFor="subject" className="contact-section__label">Subject:</label>
            <input type="text" id="subject" name="subject" className="contact-section__input" required />
          </div>
          <div className="contact-section__form-group">
            <label htmlFor="email" className="contact-section__label">Email:</label>
            <input type="email" id="email" name="email" className="contact-section__input" required />
          </div>
          <div className="contact-section__form-group">
            <label htmlFor="message" className="contact-section__label">Message:</label>
            <textarea id="message" name="message" rows="5" className="contact-section__textarea" required></textarea>
          </div>
          <button type="submit" className="contact-section__submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
