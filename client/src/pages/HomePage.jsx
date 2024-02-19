import { useEffect, useState } from "react";
import BannerSlide from "../components/BannerSlider/BannerSlide";
import Services from "../components/Services/Services";
import HomeProjects from "../components/Projects/HomeProjects";
import MainContact from "../components/Contact/MainContact";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import Header from "../components/Header/Header";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, [])

  const getAllProjects = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/projects/all-projects`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <BannerSlide />
      <Services />
      <HomeProjects projects={projects} />
      <MainContact />
      <Footer />
    </>
  );
};

export default HomePage;