import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  
  return (
    <Link
      className="flex flex-col justify-center items-center w-[300px] h-[300px] rounded-lg bg-gray-300 hover:rounded-lg mx-auto relative hover:bg-black hover:cursor-pointer"
      to={`/projectdetail/${project._id}`}
    >
      <img src={project.images[0]} alt="" className="w-full h-full rounded-lg object-cover hover:opacity-60" />
      <div className="absolute top-1/2">
        <h1 className="text-white text-2xl">{project.title}</h1>
      </div>
    </Link>
  );
};

export default ProjectCard;
