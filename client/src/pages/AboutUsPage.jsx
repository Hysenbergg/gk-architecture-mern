import React from "react";
import { MdMapsHomeWork } from "react-icons/md";
import PageSplash from "../images/pageSplash.jpg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AboutUsPage = () => {
  return (
    <div className="bg-[#f8f4f3] pb-0">
      <Header />
      <div className="relative select-none">
        <div className="bg-black">
          <img
            src={PageSplash}
            alt=""
            className="h-[500px] w-full object-cover opacity-60"
          />
        </div>
        <div className="flex items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white text-5xl">
          <MdMapsHomeWork />
          <span className="ml-3">Hakkımızda</span>
        </div>
      </div>
      <div className="mx-40 my-5">
        <div className="px-5 py-3">
          <h2 className="text-xl font-bold mb-2">Misyon</h2>
          <span className="text-lg">
            Müşteri odaklı yaklaşımımızla, estetik değerleri, sürdürülebilir tasarımı ve mükemmel işçiliği bir araya getirerek, her bir projede yaşam alanları yaratmak ve
            müşterilerimizin hayallerini gerçeğe dönüştürmek. İnovasyon, kalite ve işbirliği ilkelerimizle, mimari çözümlerimizle toplumlara ve çevreye değer katmayı hedefliyoruz.
          </span>
        </div>
        <div className="px-5 py-3">
          <h2 className="text-xl font-bold mb-2">Vizyon</h2>
          <span className="text-lg">
            Sektörde lider bir mimarlık ofisi olarak, sürdürülebilir tasarım ilkelerini benimseyen, estetik açıdan çarpıcı ve fonksiyonel projelerle dünya çapında 
            tanınan bir marka olmayı hedefliyoruz. Mimarlık alanındaki en son teknoloji ve trendleri takip ederek, geleceğin tasarım standartlarını belirlemek ve sürdürülebilir
            bir dünya için öncü olmak istiyoruz. Müşterilerimizin beklentilerini aşarak, her projede özgün ve unutulmaz bir iz bırakmak için çalışıyoruz.
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
