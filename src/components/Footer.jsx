import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;

    // Scroll to contact section
    window.location.href = "#contact";
  };

  return (
    <footer className="footer">
      <div className="page-wrap">
        <div className="footer-inner">
          {/* BRAND */}
          <div className="footer-brand">
            <h3>PEPA Branding Solutions</h3>
            <p>
              Strategic branding, digital marketing, and web solutions designed
              to help businesses grow and scale.
            </p>
          </div>
{/* COMPANY + SOCIALS */}
<div className="footer-col-group">
  <div className="footer-col">
    <h4>Company</h4>
    <a href="#services">Services</a>
    <a href="#work">Our Work</a>
    <a href="#achievements">Achievements</a>
    <a href="#faq">FAQs</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-col">
    <h4>Socials</h4>
    <a href="mailto:info@pepa.co.in">
      Email <span>↗</span>
    </a>
    <a href="#" target="_blank" rel="noreferrer">
      Instagram <span>↗</span>
    </a>
    <a href="#" target="_blank" rel="noreferrer">
      LinkedIn <span>↗</span>
    </a>
  </div>
</div>


          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>
              Get marketing insights, branding tips, and growth strategies
              delivered to your inbox.
            </p>

            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <span className="newsletter-prefix">@</span>

              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="newsletter-btn"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} PEPA Branding Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
