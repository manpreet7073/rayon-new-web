import { useState } from "react";

const StepsToSuccess = () => {
  const [activeStep, setActiveStep] = useState(0);

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
    <div className="happy-clients section mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our 4 Steps <em>To Success</em> & <span>Happy Clients</span></h2>
              <div className="line-dec" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="tabs">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      {steps.map((step, index) => (
                        <div key={index} className={index === activeStep ? "active" : ""} onClick={() => setActiveStep(index)}>
                          <span>{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      {steps.map((step, index) => (
                        <li key={index} className={index === activeStep ? "active" : ""}>
                          <div>
                            <div className="row">
                              <div className="col-lg-7">
                                <h4>{step.title}</h4>
                                <div className="line-dec" />
                                <p>{step.content}</p>
                              </div>
                              <div className="col-lg-5 align-self-center">
                                <i className={step.icon} style={{ fontSize: "50px", color: "#c03afe" }}></i>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToSuccess;
