import React from 'react';
import '../css/Services.css';
import StepsToSuccess from '../components/StepsToSuccess';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Services = () => {
    return (
        <>
        <Helmet>
        <title>Our Services - RayonWeb</title>
        <meta name="description" content="Explore the wide range of services offered by RayonWeb, including web development, design, SEO, and more." />
        <meta name="keywords" content="services, RayonWeb, web development, UI/UX design, SEO, full stack development, digital solutions" />
      </Helmet>
            <div className="services-container mt-5">
            <div className="services-header mt-5">
                <h1 className="animated-title">Our Services</h1>
                <p className="animated-text">
                    Innovative technology solutions tailored to your business needs. 
                    We specialize in delivering cutting-edge digital solutions that drive success.
                </p>
            </div>
                <section className="services-list">
                    <div className="service-item">
                        <i className="fa fa-code"></i>
                        <h2>Full-Stack Development</h2>
                        <p>We design and develop scalable, secure, and high-performance web applications. Our expertise spans frontend and backend technologies, ensuring seamless integration and optimal performance. Whether it's a dynamic website or a complex enterprise system, we deliver tailored solutions that align with your business goals.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-paint-brush"></i>
                        <h2>UI/UX Design</h2>
                        <p>Our design team focuses on creating intuitive, visually appealing, and user-friendly interfaces. We follow a research-driven approach, ensuring a seamless user experience that enhances engagement and conversion rates. From wireframing to prototyping and final implementation, we prioritize usability and aesthetics.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-cloud"></i>
                        <h2>Cloud & DevOps</h2>
                        <p>Optimize your business operations with our cloud and DevOps solutions. We help businesses migrate to the cloud, automate deployments, and enhance security. Our expertise in AWS, Docker, Kubernetes, and CI/CD pipelines ensures smooth, reliable, and scalable infrastructure management, minimizing downtime and maximizing efficiency.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-laptop-code"></i>
                        <h2>Software Development</h2>
                        <p>From enterprise applications to custom software solutions, we build robust, scalable, and tailored applications that streamline business operations and enhance productivity.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-cogs"></i>
                        <h2>IT Consulting</h2>
                        <p>Our expert consultants provide strategic guidance on IT infrastructure, system integration, and digital transformation to help businesses stay ahead in the competitive market.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-shield-alt"></i>
                        <h2>Cybersecurity</h2>
                        <p>We implement top-tier security measures to protect businesses from cyber threats, ensuring data integrity and compliance with industry standards.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-mobile-alt"></i>
                        <h2>Mobile App Development</h2>
                        <p>We create high-quality mobile applications for iOS and Android, focusing on performance, security, and seamless user experience.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-brain"></i>
                        <h2>AI & Machine Learning</h2>
                        <p>Harness the power of AI and ML to automate processes, gain insights, and enhance decision-making capabilities for your business.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-link"></i>
                        <h2>Blockchain Solutions</h2>
                        <p>We develop secure and transparent blockchain applications, including smart contracts and decentralized apps (DApps), to revolutionize business processes.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-microchip"></i>
                        <h2>Internet of Things (IoT)</h2>
                        <p>Connecting devices and systems to enable real-time data collection, analysis, and automation, enhancing efficiency and decision-making.</p>
                    </div>
                </section>
            </div>

            <StepsToSuccess />

            <div className="cta section mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h4>
                                Are You Ready To Work &amp; Develop With Us?<br />
                                Don't Hesitate &amp; Contact Us!
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

export default Services;
