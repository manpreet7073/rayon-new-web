import React, { useEffect, useState, useRef } from "react";
import "../css/AboutUs.css"; // Import external CSS

const AboutUs = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="infos section" id="about-us" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-image">
                    <img src="assets/images/left-infos.jpg" alt="About Us" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-heading">
                    <h2>
                      About <em>RayonWeb</em> <span>Solutions</span>
                    </h2>
                    <div className="line-dec" />
                    <p>
                      At <strong>RayonWeb Solutions</strong>, we provide innovative
                      digital solutions and advanced security services to help
                      businesses thrive in a connected world.
                    </p>
                  </div>

                  {/* Skill Bars */}
                  <div className="skills">
                    {[
                      { name: "Web & Software Development", value: 95 },
                      { name: "UI/UX Design", value: 85 },
                      { name: "Digital Marketing", value: 80 },
                      { name: "Enterprise Solutions", value: 90 },
                      { name: "Cybersecurity & Threat Protection", value: 92 },
                    ].map((skill, index) => (
                      <div className="skill-slide" key={index}>
                        <h6>{skill.name}</h6>
                        <div className="progress-bar">
                          <div
                            className="fill"
                            style={{
                              width: animated ? `${skill.value}%` : "0%",
                            }}
                          >
                            {animated ? `${skill.value}%` : ""}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="more-info">
                    Our combined expertise ensures businesses receive{" "}
                    <strong>top-notch development, creative design, digital marketing, and security solutions</strong> 
                    to stay ahead in a competitive digital landscape.
                    With <strong>Cerber Security</strong>, we offer robust 
                    <strong> cybersecurity measures, threat protection, and risk mitigation</strong> 
                    to safeguard businesses against modern threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
