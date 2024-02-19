import React from "react";
import ServiceTabArch from "../ServiceTabContent/ServiceTabArch";
import ServiceTabInArch from "../ServiceTabContent/ServiceTabInArch";
import ServiceTabDesignProject from "../ServiceTabContent/ServiceTabDesignProject";
import ServiceTabApplication from "../ServiceTabContent/ServiceTabApplication";
import TabButton from "./TabButton";

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

export default ServiceTabSmUltra;
