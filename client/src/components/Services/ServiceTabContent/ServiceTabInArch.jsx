import React from "react";

const ServiceTabInArch = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        İç mekanlarınızda yaşam alanınızı yeniden tanımlıyoruz. 
        İç mimari projelerimizde, işlevselliği ön planda tutarken estetik detaylara da özel bir önem veriyoruz. 
        Renk seçiminden mobilya düzenlemesine kadar her aşamada sizinle işbirliği yaparak, iç mekanlarınızı sıcak, şık 
        ve kullanışlı bir hale getiriyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabInArch;
