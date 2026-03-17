import React from "react";
import "../styles/Global.css";
import Pricing from "../components/Pricing";
import "../styles/FaqSection.css";
import { useState,useRef, useEffect} from "react";
// import "../styles/Services.css";
import "../styles/About.css";
import "../styles/Work.css";


export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle cursor movement to calculate offset
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Calculate movement from -1 to 1 based on screen center
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <style>{`
        .hero {
          min-height: 100vh;
          position: relative;
          background: radial-gradient(circle at top right, rgba(254, 224, 100, 0.35), #ffffff 70%);
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
          perspective: 1000px; /* Crucial for 3D effect */
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .hero-container { flex-direction: row; align-items: center; }
        }

        /* --- PARALLAX LAYERS --- */
        .geometric-wrap {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* The Main Image Frame */
        .main-frame {
          width: 85%;
          height: 100%;
          clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
          border-right: 12px solid var(--pepa-yellow);
          overflow: hidden;
          /* Uses State for Movement */
          transform: translate(
            ${mousePos.x * 15}px, 
            ${mousePos.y * 15}px
          );
          transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .main-frame img {
          width: 110%; /* Slightly larger to allow room for movement */
          height: 110%;
          object-fit: cover;
          transform: translate(-5%, -5%);
        }

        /* The Dark Accent Card (Moves more for depth) */
        .accent-card {
          position: absolute;
          bottom: 10%;
          left: -5%;
          background: var(--dark);
          color: white;
          padding: 30px;
          width: 240px;
          border-radius: 0 40px 0 40px;
          box-shadow: 20px 20px 0px var(--pepa-yellow);
          z-index: 20;
          /* Higher multiplier = Moves faster = Appears closer to user */
          transform: translate(
            ${mousePos.x * -35}px, 
            ${mousePos.y * -35}px
          );
          transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Glow Follower (Subtle background glow that follows mouse) */
        .mouse-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(254, 224, 100, 0.15) 0%, transparent 70%);
          top: 0;
          left: 0;
          pointer-events: none;
          transform: translate(
            calc(${mousePos.x * 50}vw + 25vw), 
            calc(${mousePos.y * 50}vh + 25vh)
          );
          z-index: 0;
        }

        .hero-title {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .hero-title span {
        font-size: clamp(4rem, 8vw, 6rem);
          display: block;
          color: var(--pepa-yellow);
          -webkit-text-stroke: 1px var(--dark);
        }

        @media (max-width: 900px) {
          /* Disable parallax on mobile for performance and better UX */
          .main-frame, .accent-card { transform: none !important; }
          .hero { text-align: center; }
        }
      `}</style>

      {/* Floating ambient glow that follows cursor */}
      <div className="mouse-glow"></div>

      <div className="page-wrap">
        <div className="hero-container">
          
          <div className="hero-content">
            <div className="contact-badge">PREMIUM AGENCY</div>
            
            <h1 className="hero-title">
              GROWING <br />
              <span>BUSINESS</span>
              BEYOND
            </h1>
            <p className="contact-description">
              We re-engineer your digital presence. PEPA is the catalyst for brands ready to dominate.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="hero-btn primary">Elevate Now</a>
              <a href="#services" className="hero-btn secondary" style={{border: 'none'}}>View Services →</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="geometric-wrap">
              <div className="main-frame">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Performance" 
                />
              </div>

              <div className="accent-card">
                <h4 style={{fontSize: '1.5rem', marginBottom: '10px'}}>10X</h4>
                <p style={{fontSize: '0.75rem', opacity: '0.7', textTransform: 'uppercase'}}>
                  Average Performance Increase
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================= SERVICES ================= */
export const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.service-row');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "01",
      title: "Social Media Marketing",
      desc: "Platform-specific content and high-energy reels that build brand trust.",
      points: ["Instagram & LinkedIn", "Reels & Posters"],
      grade: "rgba(254, 224, 100, 0.2)" 
    },
    {
      id: "02",
      title: "SEO & Management",
      desc: "Search-optimized websites designed to rank higher and scale faster.",
      points: ["Technical SEO", "Performance"],
      grade: "rgba(254, 224, 100, 0.5)" 
    },
    {
      id: "03",
      title: "Premium Branding",
      desc: "Cinematic video production and custom strategies for market leaders.",
      points: ["Identity", "Paid Campaigns"],
      grade: "rgba(254, 224, 100, 0.9)" 
    }
  ];

  return (
    <section className="services-page" id="services" ref={sectionRef}>
      <style>{`
        .services-page {
          
          padding: 100px 0;
          background: radial-gradient(circle at top right, rgba(254, 224, 100, 0.35), #ffffff 70%);
          overflow: hidden;
        }

        .services-header {
          margin-bottom: 50px; /* Reduced margin */
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 15px; /* Tighter gap */
        }

        /* --- STREAMLINED ROW STYLE --- */
        .service-row {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: white;
          border-radius: 20px; /* More compact corners */
          border: 1px solid #f3f4f6;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .service-row.active {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 1024px) {
          .service-row { flex-direction: row; align-items: center; min-height: 140px; }
        }

        /* --- COMPACT NUMBERS --- */
        .service-id {
          font-size: 3.5rem; /* Reduced from 7rem */
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px #e5e7eb;
          margin-left: 30px;
          transition: 0.6s ease;
        }

        .service-row.active .service-id {
          -webkit-text-stroke: 1px var(--pepa-yellow);
          color: rgba(254, 224, 100, 0.1);
        }

        .service-main { padding: 25px 40px; flex: 1; }
        .service-title { font-size: 1.6rem; font-weight: 900; text-transform: uppercase; margin-bottom: 8px; }
        .service-text { font-size: 0.95rem; color: #6b7280; line-height: 1.5; max-width: 500px; }

        .grade-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 8px;
          background: var(--pepa-yellow);
        }

        /* --- COMPACT ACTION --- */
        .arrow-action {
          width: 50px; height: 50px; /* Reduced from 80px */
          background: var(--dark); color: white;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; text-decoration: none; font-size: 1.2rem;
          margin-right: 30px; transition: 0.3s;
        }

        .arrow-action:hover {
          background: var(--pepa-yellow);
          color: var(--dark);
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .service-row { margin: 0 15px; }
          .service-id { font-size: 2.5rem; margin-top: 15px; }
          .arrow-action { width: 100%; height: 50px; border-radius: 0; margin: 0; }
          .service-main { padding: 20px; }
        }
      `}</style>

      <div className="page-wrap">
        {/* --- HEADER TITLE --- */}
        <div className="services-header">
          <span className="contact-badge" style={{ background: 'var(--pepa-yellow)', padding: '5px 15px', borderRadius: '99px', fontSize: '0.65rem', fontWeight: '800' }}>
            WHAT WE DO
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '950', marginTop: '15px', textTransform: 'uppercase', lineHeight: '1' }}>
            DIGITAL <span style={{ color: 'var(--pepa-yellow)', WebkitTextStroke: '1px var(--dark)' }}>SOLUTIONS</span>
          </h2>
        </div>

        {/* --- STACK --- */}
        <div className="services-stack">
          {services.map((s, index) => (
            <div key={s.id} className="service-row" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="grade-bar" style={{ background: s.grade }}></div>
              <div className="service-id">{s.id}</div>
              
              <div className="service-main">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-text">{s.desc}</p>
                
                <div style={{marginTop: '15px', display: 'flex', gap: '8px'}}>
                  {s.points.map((p, i) => (
                    <span key={i} style={{ fontSize: '0.7rem', fontWeight: '700', padding: '4px 12px', background: '#f9f9f9', border: `1px solid ${s.grade}`, borderRadius: '99px' }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="arrow-action">→</a>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.work-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const works = [
    { 
      title: "Brand Campaigns", 
      size: "large", 
      details: "Comprehensive brand positioning and visual storytelling.",
      images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"] 
    },
    { 
      title: "Web Development", 
      size: "small", 
      details: "High-performance web applications. Featured: Green City Degree College projects.",
      links: [
        { name: "Live Site 1", url: "https://greencitydegreecollege.in" },
        { name: "Live Site 2", url: "https://gcdc.pages.dev/" }
      ]
    },
    { title: "Social Media Growth", size: "small", details: "Organic and paid strategies for community building." },
    { title: "E-commerce Marketing", size: "medium", details: "Conversion-optimized funnels for online retail." },
    { title: "Lead Gen Funnels", size: "medium", details: "B2B and B2C automated lead acquisition systems." },
    { title: "Video Marketing", size: "small", details: "Cinematic short-form and long-form video content." },
    { title: "Corporate Gifting", size: "large", details: "Bespoke gifting solutions for employee engagement and client relations." }
  ];

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <style>{`
        .work-section {
          padding: 80px 0;
          background: radial-gradient(circle at center, rgba(254, 224, 100, 0.05), #ffffff 80%);
          text-align: center;
          position: relative;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 50px;
        }

        .work-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 24px;
          padding: 40px;
          text-align: left;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 250px;
          cursor: pointer;
        }

        .work-card.active { opacity: 1; transform: translateY(0); }

        .work-card:hover {
          border-color: var(--pepa-yellow);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          transform: scale(1.02);
        }

        .work-card h3 { font-size: 1.5rem; font-weight: 900; text-transform: uppercase; z-index: 2; }
        .work-card p { font-size: 0.85rem; color: #6b7280; margin-top: 10px; z-index: 2; }

        /* --- MODAL STYLES --- */
        .work-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .work-modal-content {
          background: white;
          max-width: 800px;
          width: 100%;
          border-radius: 32px;
          padding: 40px;
          position: relative;
          text-align: left;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
        }

        .close-modal {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f3f4f6;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-weight: bold;
        }

        .modal-link {
          display: inline-block;
          margin-top: 20px;
          margin-right: 15px;
          padding: 12px 24px;
          background: var(--dark);
          color: white;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .modal-link:hover { background: var(--pepa-yellow); color: var(--dark); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (min-width: 1024px) {
          .work-grid { grid-template-columns: repeat(3, 1fr); }
          .work-card.large { grid-column: span 2; }
        }
      `}</style>

      <div className="page-wrap">
        <span className="contact-badge" style={{ background: 'var(--pepa-yellow)', padding: '5px 15px', borderRadius: '99px', fontSize: '0.65rem', fontWeight: '800' }}>
          OUR PORTFOLIO
        </span>

        <h2 className="work-title">
          Selected <span>Projects</span>
        </h2>

        <div className="work-grid">
          {works.map((item, i) => (
            <div 
              key={i} 
              className={`work-card ${item.size}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActiveProject(item)}
            >
              <h3>{item.title}</h3>
              <p>Click to explore our impact in this domain.</p>
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '40px', height: '40px',
                background: 'var(--pepa-yellow)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)', opacity: 0.1
              }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL RENDERING --- */}
      {activeProject && (
        <div className="work-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="work-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveProject(null)}>✕</button>
            <span style={{ color: 'var(--pepa-yellow)', fontWeight: '800', fontSize: '0.8rem' }}>PROJECT DETAILS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: '10px 0' }}>{activeProject.title}</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem' }}>{activeProject.details}</p>
            
            {activeProject.links && (
              <div style={{ marginTop: '20px' }}>
                {activeProject.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="modal-link">
                    {link.name} ↗
                  </a>
                ))}
              </div>
            )}

            {/* Placeholder for project frames/images */}
            <div style={{ marginTop: '30px', background: '#f9fafb', borderRadius: '20px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #e5e7eb' }}>
              <p style={{ color: '#9ca3af' }}>[ Image / Web Frame Preview for {activeProject.title} ]</p>
            </div>
          </div>
        </div>
      )}
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