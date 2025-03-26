import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Allen & Unwin",
    image: "assets/images/projects/p1.png",
    link: "https://www.allenandunwin.com",
  },
  {
    id: 2,
    title: "Allen & Unwin Aotearoa New Zealand",
    image: "assets/images/projects/p2.png",
    link: "https://www.allenandunwin.co.nz",
  },
  {
    id: 3,
    title: "Murdoch Books",
    image: "assets/images/projects/p3.png",
    link: "https://www.murdochbooks.com",
  },
  {
    id: 4,
    title: "Australian Copyright Council",
    image: "assets/images/projects/p4.png",
    link: "https://www.copyright.org.au",
  },
  {
    id: 5,
    title: "Affirm Press",
    image: "assets/images/projects/p5.png",
    link: "https://affirmpress.com.au",
  },
  {
    id: 6,
    title: "Banking Quest – Your Financial Partner",
    image: "assets/images/projects/p6.png",
    link: "https://www.bankingquest.com",
  },
  {
    id: 7,
    title: "DIMO Book Publishing Solution",
    image: "assets/images/projects/p7.png",
    link: "https://dimoapp.com",
  },
];

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Discover Our <em>Work</em> &amp; <span>Projects</span>
              </h2>
              <div className="line-dec" />
              <p>Explore some of our recent projects showcasing our expertise.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="item">
                    <div className="image-container">
                      <img src={project.image} alt={project.title} />
                      <div className="overlay">
                        <div className="overlay-content">
                          <h4>{project.title}</h4>
                          <Link to={project.link}>
                            <i className="fa fa-link" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .image-container img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .image-container:hover {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          text-align: center;
          padding: 20px;
        }

        .image-container:hover .overlay {
          opacity: 1;
        }

        .overlay-content {
          max-width: 80%;
        }

        .overlay h4 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .overlay p {
          font-size: 16px;
          margin-bottom: 12px;
        }

        .overlay a {
          color: white;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
