import Project from '../components/Projects'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return <>
   <Helmet>
        <title>RayonWeb - Crafting Digital Experiences</title>
        <meta name="description" content="At RayonWeb, we craft digital experiences that transform ideas into reality. Let us help you bring your vision to life." />
        <meta name="keywords" content="RayonWeb, web development, digital solutions, full stack development, creative design" />
      </Helmet>

  <div className="main-banner" id="top">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="caption header-text">
          <h6>INNOVATIVE SOFTWARE SOLUTIONS</h6>
          <div className="line-dec" />
          <h4>
          Your Vision <em>Our Code &</em> Turning Ideas <span>Reality</span>
          </h4>

          <p>
            At <strong>RayonWeb Solutions</strong>, we craft cutting-edge software 
            solutions that drive business growth. Specializing in **web development**, 
            **custom software**, and **scalable digital platforms**, we turn your vision into 
            reality with innovative technology and seamless design.
          </p>
          <div className="main-button scroll-to-section">
            <Link to="/services">Explore Our Services</Link>
          </div>
          <span>or</span>
          <div className="second-button">
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <Services />
  <Project />
  <AboutUs />
  <ContactForm />


  </>;
};

export default Home;
