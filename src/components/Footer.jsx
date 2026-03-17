import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;

    // Save email to session so the Contact component can auto-fill it
    sessionStorage.setItem("newsletterEmail", email);
    
    // Smooth scroll to contact
    window.location.href = "#contact";
    setEmail("");
  };

  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: radial-gradient(
            circle at top,
            rgba(254, 224, 100, 0.18),
            #ffffff 70%
          );
          padding: 80px 0 30px;
          color: #50576b;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- BRANDING --- */
        .footer-brand h3 {
          font-size: 1.6rem;
          font-weight: 950;
          color: var(--dark);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .footer-brand p {
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 300px;
        }

        /* --- LINKS --- */
        .footer-col h4, .footer-newsletter h4 {
          font-size: 0.8rem;
          font-weight: 900;
          text-transform: uppercase;
          color: var(--dark);
          margin-bottom: 20px;
          letter-spacing: 1.5px;
        }

        .footer-col a {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #6b7280;
          text-decoration: none;
          margin-bottom: 12px;
          transition: 0.3s;
        }

        .footer-col a span {
          color: var(--pepa-yellow);
          font-size: 0.7rem;
          transition: transform 0.3s;
        }

        .footer-col a:hover {
          color: var(--dark);
          transform: translateX(5px);
        }

        .footer-col a:hover span {
          transform: translate(2px, -2px);
        }

        /* --- NEWSLETTER --- */
        .footer-newsletter p {
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 999px;
          padding: 6px 6px 6px 15px;
          border: 1px solid #e5e7eb;
          transition: 0.3s;
        }

        .newsletter-form:focus-within {
          border-color: var(--pepa-yellow);
          box-shadow: 0 0 0 4px rgba(254, 224, 100, 0.2);
        }

        .newsletter-form input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.9rem;
          font-weight: 600;
          background: transparent;
        }

        .newsletter-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: var(--dark);
          color: #ffffff;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          background: var(--pepa-yellow);
          color: var(--dark);
          transform: scale(1.1);
        }

        /* --- BOTTOM --- */
        .footer-bottom {
          margin-top: 60px;
          padding-top: 25px;
          border-top: 1px solid rgba(0,0,0,0.05);
          text-align: center;
          font-size: 0.7rem;
          font-weight: 800;
          color: #9ca3af;
          letter-spacing: 1px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-brand, .footer-newsletter { grid-column: span 1; }
        }

        @media (max-width: 768px) {
          .footer-inner { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p, .footer-newsletter p { margin: 0 auto 20px; }
          .footer-col a { justify-content: center; }
          .newsletter-form { max-width: 350px; margin: 0 auto; }
        }
      `}</style>

      <div className="page-wrap">
        <div className="footer-inner">
          
          {/* BRAND */}
          <div className="footer-brand">
            <h3>PEPA<span>.</span></h3>
            <p>
              Strategic branding, digital marketing, and web development 
              engineered to help modern businesses dominate the digital landscape.
            </p>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <div className="footer-links">
              <a href="#services">Services <span>↗</span></a>
              <a href="#work">Portfolio <span>↗</span></a>
              <a href="#about">About Us <span>↗</span></a>
              <a href="#contact">Contact <span>↗</span></a>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="footer-col">
            <h4>Socials</h4>
            <div className="footer-links">
              <a href="mailto:info@pepa.co.in">Email <span>↗</span></a>
              <a href="#" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
              <a href="#" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Get marketing insights and branding tips delivered to your inbox.</p>

            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} PEPA BRANDING SOLUTIONS. ENGINEERED FOR GROWTH.
        </div>
      </div>
    </footer>
  );
};

export default Footer;