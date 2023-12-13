import React from "react";

const ServiceTabInArch = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        3D Görselleştirmeleri ile zenginleştirdiğimiz, her aşamasında incelikle
        hazırladığımız mimari çizimlerimiz ile yaşam alanlarınızı daha
        yaşanılabilir kılmak için çalışıyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabInArch;
