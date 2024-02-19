import React from "react";

const ServiceTabDesignProject = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Tasarım projelerimizde, hayalinizdeki mekanı gerçeğe dönüştürmek için kreatif ve özgün çözümler sunuyoruz.
        Modern tasarım trendlerini takip eden profesyonel ekibimiz, işlevselliği ve estetiği bir araya getirerek projenizi öne çıkarıyor.
        Size özel tasarım projelerimizle fark yaratıyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabDesignProject;
