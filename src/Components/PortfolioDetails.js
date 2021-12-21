import React from 'react';
import { FaCheckCircle, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";

const PortfolioDetails = ({ data }) => {
    const { title } = useParams();

    if (data) {
        var projectData = data.projects.filter(item => item.projectTitle === title);
        console.log(projectData)
    }
    return (
        <section className="my-24 max-w-screen-xl mx-auto px-6">
            <div className="flex justify-center">
                <h1 className="text-center text-4xl lg:text-7xl">{projectData[0]?.projectTitle}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 mt-12">
                {/* image  */}
                <div>
                    <Swiper
                        loop={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={1}
                        coverflowEffect={{ "rotate": 0, "stretch": 0, "depth": 300, "modifier": 1, "slideShadows": false }}
                        pagination={true}
                        className="mySwiper"
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
                                slidesPerView: 1,
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
                        {projectData[0]?.images.map((item, index) => (
                            <SwiperSlide key={index} className="p-6 bg-white rounded-xl shadow-xl box-border" style={{width:'700px', height:'400px'}}>
                                <img className="object-cover rounded-xl w-full h-full" src={item} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                {/* description  */}
                <div className="bg-white flex flex-col items-center mx-auto justify-center w-1/2 p-6 rounded-xl shadow-xl box-border">
                    <h1 className="portfolio-description-heading">Project Description</h1>
                    <div className="flex flex-col py-8 space-y-3">
                        {projectData[0]?.description.map((item, index) => (
                            <div className="flex space-x-3" key={index}>
                               
                                <span className="">  <FaCheckCircle className="text-2xl text-green-500" /> {item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <a className="link-live-demo" href={projectData[0]?.liveDemo} target="_blank" rel="noreferrer">
                            <button className="bg-primary px-5 py-3 rounded-lg shadow-xl my-7 text-white font-bold">
                                Live Demo
                            </button>
                        </a>
    

                        <a className="github_icon" href={projectData[0]?.github} target="_blank" rel="noreferrer">
                            <FaGithub className="text-5xl" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PortfolioDetails