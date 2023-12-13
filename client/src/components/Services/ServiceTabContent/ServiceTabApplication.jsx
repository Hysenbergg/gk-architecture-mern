import React from "react";

const ServiceTabApplication = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Günümüz mimari tasarımlarına uygun olarak modern ve sıra dışı
        uygulamalarımız ile dekorasyon süreçlerinin tamamında yaşam alanlarınızı
        daha yaşanılabilir kılıyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabApplication;
