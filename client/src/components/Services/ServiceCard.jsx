import React, { useState } from 'react';

const ServiceCard = ({ title, describe, image, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group flex flex-col bg-white m-3 
      relative overflow-hidden h-[350px] md:h-[375px] lg:h-[400px] w-[300px] md:w-[500px] lg:w-[350px]
      ${isHovered ? "bg-transparent " : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-1 flex-col h-full items-start justify-center px-[60px] py-[40px] relative z-[1]">
        <span className="mb-[30px] text-[#b19777] text-[60px]">{icon}</span>
        <h1
          className={`mb-5 text-[18px] font-semibold ${isHovered ? "text-white" : ""
            }`}
        >
          {title}
        </h1>
        <p className={`text-black text-start ${isHovered ? "text-white" : ""}`}>
          {describe}
        </p>
        {/*
        
        <button
          className={`mt-[30px] text-black text-lg ${isHovered ? "text-yellow-600" : ""
            }`}
        >
          Read More
        </button>
        */}
      </div>

      <img
        src={image}
        alt=''
        className={`flex-[2_2_0%] h-full bg-cover absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity 
      duration-300 z-0 ${isHovered ? "group-hover:opacity-70 brightness-50" : ""}`}
      />
    </div>
  )
}

export default ServiceCard