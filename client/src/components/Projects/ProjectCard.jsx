import React from "react";

const ProjectCard = ({ title, images, category }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-[300px] h-[300px] bg-gray-300 hover:rounded-lg mx-auto relative hover:bg-black hover:cursor-pointer"
      onClick={() => console.log(`${title} adlı projeye bastım. `)}
    >
      <img src={images[0]} alt="" className="w-full h-full object-cover hover:opacity-60" />
      <div className="absolute top-1/2">
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
