import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="lg:fixed left-0 top-0 p-0 m-0 w-full bg-[#f8f4f3] bg-opacity-60 border-b-[0.1px] border-zinc-400 z-[999] h-[100px] lg:h-[80px] backdrop-blur-[8px] shadow-lg shadow-black/30">
      <div className="py-3 mx-5 md:mx-20 lg:mx-40 flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="pl-10">
          <Link to={"/"}>
            <img
              className="w-auto h-[32px]"
              src={require("../../images/logo.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-x-5 text-lg">
          <Link to={"/"}>
            <span>Ana Sayfa</span>
          </Link>
          <Link to={"/services"}>
            <span>Hizmetler</span>
          </Link>
          <Link to={"/projects"}>
            <span>Projeler</span>
          </Link>
          <Link to={"/aboutus"}>
            <span>Hakkımızda</span>
          </Link>
          <Link to={"/contact"}>
            <span>İletişim</span>
          </Link>
          <Link to={"/dashboard"}>
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
