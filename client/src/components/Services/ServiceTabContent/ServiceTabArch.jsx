import React from "react";

const ServiceTabArch = () => {
  return (
    <div className="flex flex-col gap-y-8 text-lg">
      <p>
        Mimari oluşumun modern hayata sunduğu yenilikleri; zamansız, fonksiyonel
        ve etkileyici faktörleri bir arada kullanarak, gereksinimlerinizi akılcı
        ve teknolojik çözümler yaratarak tasarlıyor ve uyguluyoruz.
      </p>
      <p>
        Konsept tasarımdan uygulama projelerine, proje taslağından inşaat
        süreçlerine dek sunduğumuz hizmetlerde ihtiyaçları özgün şekilde
        yorumlayan vizyonumuzla tasarım sürecinin başından itibaren fark
        yaratmak için çalışıyoruz.
      </p>
      <p>
        Cesur ve yenilikçi fikirlerimizi ilham veren yapılara dönüştüren modern
        bir vizyonla çalışıyoruz. Son teknoloji yapı elemanları ile nitelikli
        uygulama projelerinde dayanıklılığın ön planda tutulduğu malzemeleri
        kullanmaya özen gösteriyoruz.
      </p>
      <img src={require('../../../images/projects_3.jpg')} alt="" className="h-auto" />
    </div>
  );
};

export default ServiceTabArch;
