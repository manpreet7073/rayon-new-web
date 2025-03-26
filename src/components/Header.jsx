import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Remove preloader after the page loads
    const preloader = document.getElementById("js-preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000); // Adjust delay if needed
    }
  }, []);

  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <div className="dots">
            <img src="logging.png" />
          </div>
        </div>
      </div>

      {/* ***** Pre-Header Area Start ***** */}
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" />
                      info@rayonwe.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" />
                      Mohali
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61573818253676">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/rayonwebsolution/?viewAsMember=true">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Pre-Header Area End ***** */}

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
                {/* ***** Logo Start ***** */}
                <Link to="/" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" />
                </Link>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link
                      to="/"
                      className={location.pathname === "/" ? "active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/about"
                      className={location.pathname === "/about" ? "active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/services"
                      className={location.pathname === "/services" ? "active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/training"
                      className={location.pathname === "/training" ? "active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      Training
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/contact"
                      className={location.pathname === "/contact" ? "active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* ***** Menu Trigger ***** */}
                <div className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span>Menu</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Add CSS for mobile menu */}
      <style>
        {`
          .main-nav {
            transition: all 0.3s ease-in-out;
          }
          .main-nav.open .nav {
            display: block;
          }
          .nav .active {
            color: #ff6600; /* Change to highlight active link */
            font-weight: bold;
            border-bottom: 2px solid #ff6600; /* Optional */
          }
          @media (max-width: 768px) {
            .nav {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              text-align: center;
              padding: 10px 0;
              background: white;
            }
            .main-nav.open .nav {
              display: flex;
              top: 0px;
            }
            .menu-trigger {
              display: block;
              cursor: pointer;
              padding: 10px;
              color: white;
              border-radius: 5px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
