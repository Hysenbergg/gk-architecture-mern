import React from "react";

const ServiceTabApplication = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Tasarımını oluşturduğumuz projelerin uygulama aşamasında da yanınızdayız. 
        Deneyimli ekibimiz, projenizi hayata geçirmek için titizlikle çalışıyor. 
        İşlerin sorunsuz bir şekilde ilerlemesi ve zamanında tamamlanması için profesyonel yaklaşımımızı projenizin 
        her aşamasına yansıtıyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabApplication;
