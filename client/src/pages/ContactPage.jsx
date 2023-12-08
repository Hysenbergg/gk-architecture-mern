import React from "react";
import { MdMapsHomeWork } from "react-icons/md";
import PageSplash from "../images/pageSplash.jpg";

const ContactPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactPage;
