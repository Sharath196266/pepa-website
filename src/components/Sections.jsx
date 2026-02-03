import React from "react";
import "../styles/Global.css";
import Pricing from "../components/Pricing";
import "../styles/FaqSection.css";
import { useState } from "react";
import "../styles/Services.css";


/* ================= HERO ================= */
export const Hero = () => (
  <section className="hero reveal">
    <div className="hero-inner">
      <span className="hero-badge">PEPA BRANDING SOLUTIONS</span>

      <h1 className="hero-title">
        The Best Solution <br />
        <span>For Growing Your Business</span>
      </h1>

      <p className="hero-subtitle">
        Personalized Enterprise Performance Assistance helping brands grow,
        engage, and dominate the digital landscape.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="hero-btn primary">
          Contact Us
        </a>
        <a href="#services" className="hero-btn secondary">
          Our Services
        </a>
      </div>
    </div>
  </section>
);

/* ================= SERVICES ================= */

export const Services = () => {

  const services = [
    {
      title: "Social Media Marketing",
      desc:
        "Platform-specific content, posters, reels, and campaigns that build engagement and brand trust.",
      points: [
        "Instagram, Facebook, LinkedIn, YouTube",
        "Posters, Reels & Shorts",
        "Content Calendar & Scheduling",
        "Audience Growth Strategy"
      ],
      icon: "📱"
    },
    {
      title: "SEO & Website Management",
      desc:
        "Search-optimized websites designed to rank higher, convert better, and scale effortlessly.",
      points: [
        "On-Page & Technical SEO",
        "Speed & Performance Optimization",
        "Landing Page Design",
        "Website Maintenance"
      ],
      icon: "🌐",
      highlight: true
    },
    {
      title: "Premium Branding",
      desc:
        "Influencer marketing, video production, paid ads, and custom brand strategies.",
      points: [
        "Brand Identity Design",
        "Influencer Collaborations",
        "Video Ads & Creatives",
        "Paid Campaign Management"
      ],
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="section services-section reveal">

      <div className="section-inner">

        <span className="section-badge">Our Services</span>

        <h2 className="section-title">
          Result-Driven <span>Digital Solutions</span>
        </h2>

        <p className="section-subtitle">
          From branding to performance marketing, we help businesses grow faster
          with proven strategies.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.highlight ? "highlight" : ""}`}
            >

              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

      <Pricing />

    </section>
  );
};


/* ================= ABOUT ================= */
export const About = () => (
  <section id="about" className="section alt reveal">
    <div className="section-inner narrow">
      <span className="section-badge">About Us</span>
      <h2 className="section-title">Branding Solutions Experts</h2>

      <p className="section-subtitle">
        At <strong>PEPA Branding Solutions</strong>, we believe the right
        strategy can unlock tremendous growth for your business. Based in
        Bangalore, we are a team of passionate marketers and creatives.
      </p>

      <p className="section-subtitle">
        From SEO and content marketing to social media, PPC, and branding — we
        deliver measurable results that matter.
      </p>
    </div>
  </section>
);

/* ================= OUR WORK ================= */
export const Work = () => (
  <section id="work" className="section alt reveal">
    <div className="section-inner">
      <span className="section-badge">Our Work</span>
      <h2 className="section-title">Selected Projects</h2>
      <p className="section-subtitle">
        Campaigns and digital experiences crafted for real-world impact.
      </p>

      <div className="cards-grid">
        <div className="card">Brand Campaigns</div>
        <div className="card">Corporate Websites</div>
        <div className="card">Social Media Growth</div>
      </div>
    </div>
  </section>
);

/* ================= ACHIEVEMENTS ================= */
export const Achievements = () => (
  <section id="achievements" className="section reveal">
    <div className="section-inner">
      <span className="section-badge">Achievements</span>
      <h2 className="section-title">Proven Results</h2>

      <div className="stats-grid">
        <div className="stat">
          <h3>150+</h3>
          <p>Brands Served</p>
        </div>
        <div className="stat">
          <h3>10×</h3>
          <p>Average Growth</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  </section>
);

/* ================= FAQ ================= */
export const FAQ = () => {

  const faqs = [
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. We work with startups, SMEs, and enterprises. Every strategy is customized based on your goals and budget."
    },
    {
      question: "Is SEO included in all plans?",
      answer:
        "SEO is included in Professional and Premium plans. Add-on SEO services are also available."
    },
    {
      question: "How soon can I see results?",
      answer:
        "Most clients begin to see measurable growth within 60–90 days depending on the service and competition."
    },
    {
      question: "Do you provide custom branding strategies?",
      answer:
        "Yes. We analyze your business, audience, and competitors to build a fully customized branding and marketing roadmap."
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely. You can upgrade, downgrade, or add services at any time."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-page" id="faqs">
      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          <span className="faq-badge">FAQs</span>

          <h2 className="faq-heading">
            Frequently Asked <span>Questions</span>
          </h2>

          <p className="faq-description">
            Everything you need to know about working with PEPA Branding Solutions.
            Can't find an answer? Contact our team anytime.
          </p>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>+</span>
              </button>

              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};