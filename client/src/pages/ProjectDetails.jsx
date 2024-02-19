import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdMapsHomeWork } from "react-icons/md";
import PageSplash from "../images/pageSplash.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const getProject = async () => {
      try {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/api/projects/` + projectId)
          .then((response) => {
            setProject(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getProject();
  }, []);

  if (!project) {
    return <div className="mt-50">Event not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="mt-50">
        <div className="relative select-none">
          <div className="bg-black">
            <img
              src={PageSplash}
              alt=""
              className="h-[500px] w-full object-cover opacity-60"
            />
          </div>
          <div className="flex items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white text-5xl">
            <MdMapsHomeWork />
            <span className="ml-3">{project.title}</span>
          </div>
        </div>
        <div className="bg-[#f8f4f3] py-[70px] lg:py-[100px] text-center">
          <h2 className="text-3xl font-bold">Proje Resimleri</h2>
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              clickable: true,
            }}
            pagination={{
              clickable: true
            }}
            modules={[Navigation, Pagination]}
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
          >
            {project.images.map((item, index) => (
              <SwiperSlide key={index} className="relative h-full">
                <div className="flex flex-col h-full py-10">
                  <img
                    src={item}
                    className="h-full sm:object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </div>
    </div>

  );
};

export default ProjectDetails;
