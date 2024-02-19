import React from "react";
import { MdMapsHomeWork } from "react-icons/md";
import PageSplash from "../images/pageSplash.jpg";
import ContactPageComponent from "../components/Contact/ContactPageComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      
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
          <span className="ml-3">İletişim</span>
        </div>
      </div>

      <div className="d-flex flex-column">
        <ContactPageComponent />
        <div>
          <iframe
            className="w-full h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.40552615766!2d28.363675975838166!3d37.214347072131915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf731b647e39c1%3A0xdb636587c69370ef!2sGazanfer%20Ko%C3%A7%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1698229562747!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
