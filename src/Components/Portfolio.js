import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  EffectCoverflow, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (project) {
      // var projectImage = "images/portfolio/" + project.image;
      return (
        <SwiperSlide>
          <div key={project.projectTitle} className=" portfolio-item card bg-white p-8 rounded-xl shadow-xl">
            <div className="item-wrap rounded-xl shadow-xl" style={{ height: '300px', overflow: 'hidden' }}>
              <img className="rounded-xl shadow-xl object-cover" alt={project.projectTitle} src={project.images[0]} />
            </div>

            <h2 className="text-gray-600 py-6 text-3xl">{project.projectTitle}</h2>
            <span>Technologies: {project.projectTools}</span>

            <div className="flex items-center space-x-3">
              <a className="link-live-demo" href={project.liveDemo} target="_blank" rel="noreferrer">
                <button className="bg-primary px-5 py-3 rounded-lg shadow-xl my-7 text-white font-bold">
                  Live Demo
                </button>
              </a>
              <Link to={`/${project.projectTitle}`}>
                <button className="bg-secondary px-5 py-3 rounded-lg shadow-xl my-7 text-white font-bold">
                  Details
                </button>
              </Link>

              <a className="github_icon" href={project.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-5xl" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row" style={{ maxWidth: '1400px' }}>
        <div className="twelve columns collapsed" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="text-center"><span>My Projects</span></h1>

          {/* <div
            id=""
            className=""
          > */}
          <Swiper
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3}
            coverflowEffect={{ "rotate": 0, "stretch": 0, "depth": 300, "modifier": 1, "slideShadows": false }}
            pagination={true}
            className="mySwiper p-9 box-border"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 3
              },
              1400: {
                slidesPerView: 3
              }
            }}
          >
            {projects}
          </Swiper>

          <div className="flex justify-center mt-4">
            <a href="http://github.com/cutlerwater" target="_blank" rel="noopener noreferrer" className="bg-primary px-6 py-3 rounded-full text-white flex items-center space-x-3" style={{ color: 'white' }}>
              Check More Projects <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Portfolio;