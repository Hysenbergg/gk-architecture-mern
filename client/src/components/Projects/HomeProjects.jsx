import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const projects = [
    {
      id: 0,
      title: "Projects 1",
      describe: "Inspiring new space.",
      project_image: require('../../images/projects_1.jpg'),
    },
    {
      id: 1,
      title: "Projects 2",
      describe: "Inspiring new space.",
      project_image: require('../../images/projects_2.jpg'),
    },
    {
      id: 2,
      title: "Projects 3",
      describe: "Inspiring new space.",
      project_image: require('../../images/projects_3.jpg'),
    },
    {
      id: 3,
      title: "Projects 4",
      describe: "Inspiring new space.",
      project_image: require('../../images/projects_4.jpg'),
    },
    {
      id: 4,
      title: "Projects 5",
      describe: "Inspiring new space.",
      project_image: require('../../images/projects_5.jpg'),
    },
  ];

const HomeProjects = () => {
  return (
    <div className="bg-[#252531] py-[70px] lg:py-[150px] text-center">
      <h1 className="text-2xl lg:text-4xl font-bold mb-10 text-white">
        Projeler
      </h1>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation]}
        className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index } className="relative h-full">
            <div className="flex flex-col h-full">
              <img src={item.project_image} className="bg-cover h-full" alt='' />
              <div className="absolute w-full h-12 lg:h-24 text-white bottom-0 right-0 left-0 text-center bg-black opacity-70 flex flex-col justify-center">
                <h6 className="text-[12px] lg:text-[24px] opacity-100">{item.title}</h6>
                <h4 className="text-[9px] lg:text-[18px] opacity-100">{item.describe}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default HomeProjects