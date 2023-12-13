import React from "react";
import ServiceTabArch from "../ServiceTabContent/ServiceTabArch";
import ServiceTabInArch from "../ServiceTabContent/ServiceTabInArch";
import ServiceTabDesignProject from "../ServiceTabContent/ServiceTabDesignProject";
import ServiceTabApplication from "../ServiceTabContent/ServiceTabApplication";

const ServiceTabSmUltra = ({ selectService, setSelectedService }) => {
  return (
    <div className="hidden sm:flex px-[30px] md:px-[75px] lg:px-[200px] py-[50px]">
      <div className="flex flex-col items-start text-lg gap-y-5">
        <TabButton
          tabName={"mimari"}
          title={"Mimari"}
          selectService={selectService}
          setSelectedService={setSelectedService}
        />
        <TabButton
          tabName={"icmimari"}
          title={"İç Mimari"}
          selectService={selectService}
          setSelectedService={setSelectedService}
        />
        <TabButton
          tabName={"tasarimproje"}
          title={"Tasarım Proje"}
          selectService={selectService}
          setSelectedService={setSelectedService}
        />
        <TabButton
          tabName={"uygulama"}
          title={"Uygulama"}
          selectService={selectService}
          setSelectedService={setSelectedService}
        />
      </div>
      <div>
        {selectService === "mimari" ? (
          <ServiceTabArch />
        ) : selectService === "icmimari" ? (
          <ServiceTabInArch />
        ) : selectService === "tasarimproje" ? (
          <ServiceTabDesignProject />
        ) : (
          <ServiceTabApplication />
        )}
      </div>
    </div>
  );
};

const TabButton = ({ tabName, title, selectService, setSelectedService }) => {
  return (
    <button
      onClick={() => setSelectedService(tabName)}
      className={
        selectService === tabName
          ? "sm:w-[100px] md:w-[150px] lg:w-[220px] flex justify-start text-[#73767D] text-[15px] md:text-[18px]"
          : "sm:w-[100px] md:w-[150px] lg:w-[220px] flex justify-start text-black text-[15px] md:text-[18px]"
      }
    >
      {title}
    </button>
  );
};

export default ServiceTabSmUltra;
