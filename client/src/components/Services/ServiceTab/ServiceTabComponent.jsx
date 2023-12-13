import React, { useState } from "react";
import ServiceTabSmUltra from "./ServiceTabSmUltra";
import ServiceTabSm from "./ServiceTabSm";

const ServiceTabComponent = () => {
  const [selectService, setSelectedService] = useState("mimari");

  return (
    <div>
      <ServiceTabSmUltra selectService={selectService} setSelectedService={setSelectedService} />
      <ServiceTabSm />
    </div>
  );
};

export default ServiceTabComponent;
