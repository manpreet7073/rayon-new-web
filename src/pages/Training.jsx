import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/TrainingProgram.css";
import ContactUsModal from "../components/ContactUsModal"; // Import modal
import { Helmet } from 'react-helmet-async';


const TrainingProgram = () => {
    const [showModal, setShowModal] = useState(false);


  return (
    <>
    
    <Helmet>
        <title>Training Programs - RayonWeb</title>
        <meta name="description" content="Discover the variety of training programs offered by RayonWeb, designed to upskill individuals and teams in web development, design, and digital solutions." />
        <meta name="keywords" content="training, RayonWeb, web development training, UI/UX design, digital solutions training, professional development" />
      </Helmet>
   
    <div className="training-program-page"> {/* Scoped Wrapper */}
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="gradient-text">Expand Your Career Opportunities</h1>
          <p>Join expert-led training programs and gain real-world experience.</p>
          <button 
            onClick={() => document.getElementById("programs").scrollIntoView({ behavior: "smooth" })} 
            className="btn-main"
          >
            Explore Programs
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us-section">
        <div className="container">
          <h2>Why Choose Rayon Web Training?</h2>
          <div className="features">
            {["Expert instructors", "High-impact projects", "Recognized certifications", "Career assistance", "Soft skills training", "Interview Preparation"].map((feature, index) => (
              <div key={index} className="feature-box">
                <h5>✅ {feature}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="programs" className="courses-section">
        <div className="container">
          <h2>Our Training Programs</h2>
          <div className="courses">
            {[
              { title: "Full Stack Development", desc: "Master React, Next.js, Node.js, and MongoDB.", duration: "6 Months" },
              { title: "Backend Development", desc: "Build applications using Node.js, Express, and Django.", duration: "3 Months" },
              { title: "Digital Marketing", desc: "Learn SEO, Google Ads, and social media marketing.", duration: "45 Days" },
              { title: "Graphic Design", desc: "Create visuals using Photoshop, Illustrator, and Figma.", duration: "3 Months" },
              { title: "DevOps Engineering", desc: "Master Docker, Kubernetes, AWS, and CI/CD tools.", duration: "6 Months" },
              { title: "Cybersecurity", desc: "Understand ethical hacking, network security, and threat mitigation.", duration: "3 Months" }
            ].map((program, index) => (
              <div key={index} className="course-box">
                <h5>{program.title} <br /> ({program.duration})</h5>
                <p>{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="extra-benefits" className="courses-section">
        <div className="container">
          <h2>Additional Learning Benefits</h2>
          <div className="courses">
          {["Resume Building", "Mock Interviews", "Industry Projects", "One-on-One Mentorship", "Job Placement Assistance", "Soft Skills Development", "Hands-on Labs", "Live Q&A Sessions"]
            .map((benefit, index) => (
              <div key={index} className="course-box">
                <h5>🎯 {benefit}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container text-center">
          <h2>Need Assistance? Contact Us!</h2>
          <p className="mb-5">
            Email us at <a href="mailto:info@rayonweb.com">info@rayonweb.com </a> 
            or visit our <Link to="/contact">Contact Us</Link> page.
          </p>
          <button className="btn-main" onClick={() => setShowModal(true)}>Get in Touch</button>
        </div>
      </section>
      <ContactUsModal showModal={showModal} setShowModal={setShowModal} />

    </div>
    </>
  );
};

export default TrainingProgram;