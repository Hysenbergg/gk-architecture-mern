import BannerSlide from "../components/BannerSlider/BannerSlide";
import Services from "../components/Services/Services";
import HomeProjects from "../components/Projects/HomeProjects";
import MainContact from "../components/Contact/MainContact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <BannerSlide />
      <Services />
      <HomeProjects />
      <MainContact />
      <Footer />
    </>
  );
};

export default HomePage;