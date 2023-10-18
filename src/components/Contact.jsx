import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Email: elmouissim3@email.com</p>
          <p>Phone: +212 640283747</p>
        </div>
        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <textarea></textarea>
          <button type="submit" className='btn '>Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
