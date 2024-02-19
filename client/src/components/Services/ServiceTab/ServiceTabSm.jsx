import React from "react";
import TabButton from "./TabButton";
import ServiceTabArch from "../ServiceTabContent/ServiceTabArch";
import ServiceTabInArch from "../ServiceTabContent/ServiceTabInArch";
import ServiceTabDesignProject from "../ServiceTabContent/ServiceTabDesignProject";
import ServiceTabApplication from "../ServiceTabContent/ServiceTabApplication";

const ServiceTabSm = ({ selectService, setSelectedService }) => {
  return (
    <div className="flex flex-col sm:hidden px-5 py-5">
      <div className="flex justify-center gap-x-5 my-5">
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

export default ServiceTabSm;
