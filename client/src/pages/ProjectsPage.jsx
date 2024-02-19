import React, { useEffect, useState } from "react";
import axios from "axios";
import PageSplash from "../images/pageSplash.jpg";
import { MdMapsHomeWork } from "react-icons/md";
import MainProjetcs from "../components/Projects/MainProjetcs";
import Header from "../components/Header/Header";

const categories = [
  {
    id: 1,
    title: 'İç ve Dış Mekan',
    value: 'dismekan&icmekan'

  },
  {
    id: 2,
    title: 'Dış Mekan',
    value: 'dismekan'

  },
  {
    id: 3,
    title: 'İç Mekan',
    value: 'icmekan'
  },
]

const ProjectsPage = () => {
  const [projects, setProjects] = useState();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/projects/all-projects`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <div className="bg-black">
          <img
            src={PageSplash}
            alt=""
            className="h-[500px] w-full object-cover opacity-60"
          />
        </div>
        <div className="flex items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white text-5xl">
          <MdMapsHomeWork />
          <span className="ml-3">Projelerimiz</span>
        </div>
      </div>
      <MainProjetcs projects={projects} categories={categories} setFiltered={setFiltered} filtered={filtered} />
    </div>
  );
};

export default ProjectsPage;