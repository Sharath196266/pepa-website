import React, { useState, useEffect, useRef } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* Autofill email from newsletter */
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("newsletterEmail");

    if (storedEmail) {
      setForm((prev) => ({ ...prev, email: storedEmail }));
      sessionStorage.removeItem("newsletterEmail");

      // Focus on name input after scroll
      setTimeout(() => {
        nameRef.current?.focus();
      }, 300);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <span className="contact-badge">Contact</span>

          <h1 className="contact-heading">
            Let’s Build Something <span>Exceptional</span>
          </h1>

          <p className="contact-description">
            Ready to grow your brand with strategy, creativity, and execution?
            Talk to our team today.
          </p>

          <div className="contact-details">
            <a href="tel:+917760757383">+91 77607 57383</a>
            <a href="mailto:info@pepa.co.in">info@pepa.co.in</a>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us about your project *"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
