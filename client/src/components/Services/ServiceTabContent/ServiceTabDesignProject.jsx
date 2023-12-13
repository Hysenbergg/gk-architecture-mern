import React from "react";

const ServiceTabDesignProject = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Tasarımda ihtiyacınız olan Yenilikçi Fikir, Mimarı Tasarım, Yerinde
        Uygulama hizmetlerini tek çatı altında sunuyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabDesignProject;
