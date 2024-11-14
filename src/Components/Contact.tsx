
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '../app/styles/contact.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div id="contact">
      <section className="contact-section">
        <div className="container contact-container">
          
          <div
            className="map-container"
            data-aos="zoom-in-up" 
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28842.517180949817!2d68.32541280269373!3d25.36076909690981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70644717a901%3A0x2a63b3e36d7135ee!2sLatifabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729196833055!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
            <div
              className="contact-info"
              data-aos="zoom-in-up" 
            >
              <div className="info-section">
                <h2>ADDRESS</h2>
                <p>Latifabad, Hyderabad</p>
              </div>
              <div className="info-section">
                <h2>EMAIL</h2>
                <a href="mailto:Asadkk2014@gmail.com" className="text-blue">Asadkk2014@gmail.com</a>
                <h2>PHONE</h2>
                <p>0347-2454751</p>
              </div>
            </div>
          </div>

          <div
            className="contact-form"
            data-aos="zoom-in-up"
          >
            <h2 className="form-title">Contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea-field"
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

