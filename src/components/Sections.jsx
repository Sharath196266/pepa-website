import React from "react";
import "../styles/Global.css";
import Pricing from "../components/Pricing";
import "../styles/FaqSection.css";
import { useState, useEffect} from "react";
import "../styles/Services.css";
import "../styles/About.css";
import "../styles/Work.css";

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
    <>
    <section className="services-page" id="services">

  <div className="services-container">

    {/* LEFT */}
    <div>
      <span className="services-badge">Our Services</span>

      <h2 className="services-heading">
        Result-Driven <span>Digital Solutions</span>
      </h2>

      <p className="services-description">
        From branding to performance marketing, we help businesses grow faster
        with proven strategies.
      </p>
    </div>

    {/* RIGHT */}
    <div className="services-right">

      <div className="service-item">
        <div className="service-header">
          <div className="service-icon">📱</div>
          <h3 className="service-title">Social Media Marketing</h3>
        </div>
        <p className="service-text">
          Platform-specific content, posters, reels, and campaigns.
        </p>
        <ul className="service-points">
          <li>Instagram, Facebook, LinkedIn</li>
          <li>Posters & Reels</li>
          <li>Content Calendar</li>
        </ul>
      </div>

      <div className="service-item featured">
        <div className="service-header">
          <div className="service-icon">🌐</div>
          <h3 className="service-title">SEO & Website Management</h3>
        </div>
        <p className="service-text">
          Search-optimized websites designed to rank higher.
        </p>
        <ul className="service-points">
          <li>On-Page SEO</li>
          <li>Technical SEO</li>
          <li>Maintenance</li>
        </ul>
      </div>

      <div className="service-item">
        <div className="service-header">
          <div className="service-icon">🚀</div>
          <h3 className="service-title">Premium Branding</h3>
        </div>
        <p className="service-text">
          Influencer marketing, video ads, and branding.
        </p>
        <ul className="service-points">
          <li>Brand Identity</li>
          <li>Influencer Campaigns</li>
          <li>Paid Ads</li>
        </ul>
      </div>

    </div>

  </div>
  
</section>
<Pricing/>
</>
  );
};



/* ================= ABOUT ================= */

export const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <span className="about-badge">About Us</span>

          <h2 className="about-title">
            Branding Solutions <span>Experts</span>
          </h2>

          <p className="about-text">
            At <strong>PEPA Branding Solutions</strong>, we help businesses
            transform ideas into powerful digital brands. We combine strategy,
            creativity, and performance marketing to deliver measurable growth.
          </p>

          <p className="about-text">
            From SEO and social media to branding and paid advertising, our team
            focuses on building strong online presence, high engagement, and
            consistent lead generation.
          </p>

          <ul className="about-points">
            <li>✔ Result-driven digital marketing</li>
            <li>✔ Custom strategies for every business</li>
            <li>✔ Transparent reporting</li>
            <li>✔ Dedicated growth experts</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Empower businesses with digital strategies that generate
              sustainable growth.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              Become a trusted digital growth partner for brands worldwide.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};


/* ================= WORK ================= */

export const Work = () => {

  const works = [
    "Brand Campaigns",
    "Corporate Websites",
    "Social Media Growth",
    "E-commerce Marketing",
    "Lead Generation Funnels",
    "Video Marketing"
  ];

  return (
    <section className="work-section" id="work">

      <span className="work-badge">Our Work</span>

      <h2 className="work-title">
        Selected <span>Projects</span>
      </h2>

      <p className="work-subtitle">
        Campaigns and digital experiences crafted for real-world impact.
      </p>

      <div className="work-grid">
        {works.map((item, i) => (
          <div key={i} className="work-card">
            <h3>{item}</h3>
            <p>
              High-quality solutions designed to drive engagement and results.
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};


export const Achievements = () => {

  const stats = [
    { label: "Projects in Pipeline", value: 5 },
    { label: "Marketing Strategies Designed", value: 12 },
    { label: "Industries Targeted", value: 8 },
    { label: "Launched In", value: 2026, noAnim: true }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((c, i) => {
          if (stats[i].noAnim) return stats[i].value;
          return c < stats[i].value ? c + 1 : c;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="achievements-section">

      <span className="achievements-badge">Milestones</span>

      <h2 className="achievements-title">
        Building Momentum <span>From Day One</span>
      </h2>

      <p className="achievements-subtitle">
        We may be new, but our foundation is strong. PEPA Branding Solutions is
        built on strategy, creativity, and execution excellence.
      </p>

      <div className="achievements-grid">
        {stats.map((s, i) => (
          <div key={i} className="achievement-card">
            <h3>{counts[i]}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};
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