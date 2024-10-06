import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a8haiq8', 'template_4lap528', form.current, {
        publicKey: '9XVcWsYdwTJqGLNOA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact-page">
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form  onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Enter Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Type Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;


// email - nerdsnits@gmail.com
// password - NERDS@swarup