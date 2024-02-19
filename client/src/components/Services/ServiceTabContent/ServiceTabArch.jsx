import React from "react";

const ServiceTabArch = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Mimarlık hizmetimizde estetik ve fonksiyonun mükemmel bir birleşimiyle projelerinizi hayata geçiriyoruz. 
        Alanında uzman mimarlarımız, modern tasarım anlayışıyla size özel çözümler sunuyor. 
        Her detayı titizlikle düşündüğümüz mimari projelerimiz, sizi ve işinizi en iyi şekilde yansıtacak.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabArch;
