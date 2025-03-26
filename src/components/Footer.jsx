import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <div className="container">
        <div className="row text-center">
          {/* Contact Information */}
          <address className="col-lg-4 mb-3">
            <div className="info-item">
              <i className="fa fa-phone"></i>
              <h4>
                <Link to="tel:" className="text-light">899 8343 324</Link>
              </h4>
            </div>
          </address>

          <address className="col-lg-4 mb-3">
            <div className="info-item">
              <i className="fa fa-envelope"></i>
              <h4>
                <Link to="mailto:info@rayonweb.com" className="text-light">info@rayonweb.com</Link>
              </h4>
              <h4>
                <Link to="mailto:rayonwebsolutions@gmail.com" className="text-light">rayonwebsolutions@gmail.com
                </Link>
              </h4>
            </div>
          </address>

          <address className="col-lg-4 mb-3">
            <div className="info-item">
              <i className="fa fa-map-marker"></i>
              <h4>
                <Link to="/" target="_blank" rel="noopener noreferrer" className="text-light">
                  Mohali, India
                </Link>
              </h4>
            </div>
          </address>
        </div>

        {/* Footer Copyright Section */}
        <div className="text-center mt-4">
        © 2025 RayonWeb Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
