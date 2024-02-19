import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const checkAdminControlle = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && user.role === "Admin";
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("/");
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActivePage = (path) => {
    // Aktif sayfanın path'i ile mevcut sayfanın path'i eşleşiyorsa true döndürür
    return location.pathname === path;
  };

  return (
    <header className="lg:fixed relative left-0 top-0 p-0 m-0 w-full bg-[#f8f4f3] bg-opacity-60 border-b-[0.1px] border-zinc-400 z-[999] h-[100px] lg:h-[80px] backdrop-blur-[8px] shadow-lg shadow-black/30">
      <div className="py-3 mx-5 md:mx-20 lg:mx-40 flex flex-row justify-between items-center h-full">
        <div className="pl-10">
          <Link to={"/"}>
            <img
              className="w-auto h-[32px]"
              src={require("../../images/logo.png")}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-x-5 text-lg">
          <Link to={"/"} className={isActivePage("/") ? "text-[#678DB9]" : ""}>
            <span>Ana Sayfa</span>
          </Link>
          <Link to={"/services"} className={isActivePage("/services") ? "text-[#678DB9]" : ""}>
            <span>Hizmetler</span>
          </Link>
          <Link to={"/projects"} className={isActivePage("/projects") ? "text-[#678DB9]" : ""}>
            <span>Projeler</span>
          </Link>
          <Link to={"/aboutus"} className={isActivePage("/aboutus") ? "text-[#678DB9]" : ""}>
            <span>Hakkımızda</span>
          </Link>
          <Link to={"/contact"} className={isActivePage("/contact") ? "text-[#678DB9]" : ""}>
            <span>İletişim</span>
          </Link>
          {
            checkAdminControlle() && (
              <Link to={"/dashboard"} className={isActivePage("/dashboard") ? "text-[#678DB9]" : ""}>
                <span>Dashboard</span>
              </Link>
            )
          }
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
          {mobileMenuOpen && (
            <div className="flex flex-col items-center mt-3 py-2 rounded-lg absolute right-1 bg-[#F8F4F3] gap-y-3 w-[150px]">
              <NavigationButton to={"/"} onClick={() => setSelectedPage("/")} selectedPage={selectedPage}>Ana Sayfa</NavigationButton>
              <NavigationButton to={"/services"} onClick={() => setSelectedPage("/services")} selectedPage={selectedPage}>Hizmetler</NavigationButton>
              <NavigationButton to={"/projects"} onClick={() => setSelectedPage("/projects")} selectedPage={selectedPage}>Projeler</NavigationButton>
              <NavigationButton to={"/aboutus"} onClick={() => setSelectedPage("/aboutus")} selectedPage={selectedPage}>Hakkımızda</NavigationButton>
              <NavigationButton to={"/contact"} onClick={() => setSelectedPage("/contact")} selectedPage={selectedPage}>İletişim</NavigationButton>
              {
                checkAdminControlle() &&
                <NavigationButton
                  to={"/dashboard"}
                  onClick={() => setSelectedPage("/dashboard")}
                  selectedPage={selectedPage}
                >
                  Dashboard
                </NavigationButton>
              }
            </div>
          )}
        </div>
      </div>

    </header>
  );
};

const NavigationButton = ({ children, to, onClick,  }) => {
  const location = useLocation();

  const isActivePage = (path) => {
    // Aktif sayfanın path'i ile mevcut sayfanın path'i eşleşiyorsa true döndürür
    return location.pathname === path;
  };
  return (
    <Link
      to={to}
      className={`px-4 py-2 border rounded-lg ${isActivePage(to) ? "bg-[#252531] text-white" : "bg-white text-black border border-black"}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Header;
