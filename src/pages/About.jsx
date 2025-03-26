import { useState, useEffect } from "react";
import StepsToSuccess from "../components/StepsToSuccess";
import '../css/AboutUs.css'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const About = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState({
    development: 0,
    cloud: 0,
    security: 0
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress({
        development: 95,
        cloud: 90,
        security: 85
      });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const steps = [
    {
      title: "Requirement Analysis & Planning",
      content: "Understanding client needs, defining project scope, creating technical documentation, and risk analysis.",
      icon: "fa fa-tasks"
    },
    {
      title: "Design & Development",
      content: "Creating wireframes, UI/UX designs, and developing the software using best coding practices to ensure scalability.",
      icon: "fa fa-code"
    },
    {
      title: "Testing & Quality Assurance",
      content: "Performing thorough testing, including unit tests, integration tests, and security testing, to ensure a bug-free application.",
      icon: "fa fa-check-circle"
    },
    {
      title: "Deployment & Maintenance",
      content: "Deploying the software, monitoring performance, and providing ongoing support for smooth operation and updates.",
      icon: "fa fa-cloud-upload"
    }
  ];

  return (
    <>
    <Helmet>
        <title>About Us - RayonWeb</title>
        <meta name="description" content="Learn more about RayonWeb, our mission, values, and how we create digital solutions that transform businesses." />
        <meta name="keywords" content="about, RayonWeb, digital solutions, web development, creative design, business transformation" />
      </Helmet>
      {/* Hero Section */}
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SOFTWARE DEVELOPMENT AGENCY</h6>
                <div className="line-dec" />
                <h4>Discover More <em>About Us</em></h4>
                <p>With over <strong>10+ years</strong> of experience, RayonWeb empowers businesses with innovative technology solutions that enhance efficiency, productivity, and digital growth. Our team of experts specializes in building high-performance web applications, scalable cloud solutions, and AI-driven tools to help businesses succeed in the digital age.</p>
                <div className="main-button"><a href="#">Discover More</a></div>
                <span>or</span>
                <div className="second-button"><a href="#">Check our FAQs</a></div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="assets/images/about1.png" alt="About Us" />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src="assets/images/about-1.gif" alt="Video" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>What We Do & Our Expertise</h2>
                <div className="line-dec" />
                <p>Backed by <strong>10+ years</strong> of industry experience, we specialize in creating scalable, secure, and high-performance digital solutions.</p>
              </div>
              <div className="skills">
                <div className="skill-slide development">
                  <h6>Full-Stack Development</h6>
                  <div className="progress-bar"><div className="fill" style={{ width: `${progress.development}%` }} /></div>
                  <span>{progress.development}%</span>
                </div>
                <div className="skill-slide cloud">
                  <h6>Cloud Computing & DevOps</h6>
                  <div className="progress-bar"><div className="fill" style={{ width: `${progress.cloud}%` }} /></div>
                  <span>{progress.cloud}%</span>
                </div>
                <div className="skill-slide security">
                  <h6>Cybersecurity & Data Protection</h6>
                  <div className="progress-bar"><div className="fill" style={{ width: `${progress.security}%` }} /></div>
                  <span>{progress.security}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <StepsToSuccess></StepsToSuccess>

      <div className="cta section mb-4">
      <div className="container">
      <div className="row">
          <div className="col-lg-8">
            <h4>
              Are You Ready To Work &amp; Develop With Us ?<br />
              Don't Hesitate &amp; Contact Us !
            </h4>
          </div>
          <div className="col-lg-4">
            <div className="main-button">
              <Link to="/contact">Contact Us Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
