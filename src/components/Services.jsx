import "../css/Services.css";

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>
                    We Provide <em>Different Services</em> &amp;
                    <span>Features</span> For Your Business
                  </h2>
                  <div className="line-dec" />
                  <p>
                    Empowering businesses with cutting-edge technology and innovative solutions.
                  </p>
                </div>
              </div>
              {[  
                { img: "services-01.jpg", title: "Custom Web Development" },
                { img: "services-02.jpg", title: "Scalable Cloud Solutions" },
                { img: "services-03.jpg", title: "AI-Powered Applications" },
                { img: "services-04.jpg", title: "SEO & Digital Marketing" },
              ].map((service, index) => (
                <div className="col-lg-6 col-sm-6 mt-5" key={index}>
                  <div className="service-item fade-in same-height">
                    <div className="icon">
                      <img
                        src={`assets/images/${service.img}`}
                        alt={service.title}
                        className="feature-img"
                      />
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
