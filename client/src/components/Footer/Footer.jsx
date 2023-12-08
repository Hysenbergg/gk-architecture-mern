import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#252531] text-white py-6 px-[10px] sm:px-[50px]">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center container mx-auto">
        {/* Sol Tarafta Logo */}
        <div className="w-full sm:w-1/2 md:w-2/3 flex justify-center mt-5 mb-5 sm:mt-0 sm:mb-0">
          <img src={require('../../images/gkm-border-footer-logo.png')} alt='' className="w-2/3" />
        </div>
        {/* Sağ Tarafta Sosyal Medya ve Bilgiler */}
        <div className="w-1/2 flex flex-col justify-center items-center py-2 ">
          <div className="flex items-center py-2 gap-5 text-white">
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BiLogoFacebook)}</span>
            </a>
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BsInstagram)}</span>
            </a>
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BiLogoTwitter)}</span>
            </a>
          </div>
          <div className="text-center w-[300px] text-white">
            <p className="my-1">gazanferkoc@gmail.com</p>
            <p>Orhaniye, İsmet Çatak Cd. Özman İşhanı D:12/5, 48000 Menteşe/Muğla</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer