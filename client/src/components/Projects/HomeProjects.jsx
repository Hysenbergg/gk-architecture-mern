import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const HomeProjects = ({projects}) => {
  return (
    <div className="bg-[#252531] py-[70px] lg:py-[150px] text-center">
      <h1 className="text-2xl lg:text-4xl font-bold mb-10 text-white">
        Projeler
      </h1>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
      >
        {projects && projects.map((item) => (
          <SwiperSlide key={item._id} className="relative h-full">
            <div className="flex flex-col h-full">
              <img src={item.images[0]} className="bg-cover h-full" alt='' />
              <div className="absolute w-full h-12 lg:h-24 text-white bottom-0 right-0 left-0 text-center bg-black opacity-70 flex flex-col justify-center">
                <h6 className="text-[12px] lg:text-[24px] opacity-100">{item.title}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default HomeProjects