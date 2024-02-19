import React from 'react';
import { BsHouseLockFill } from "react-icons/bs";
import { MdApartment, MdOutlineDesignServices } from "react-icons/md";
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const servicesData = [
    {
      id: 0,
      title: "Doğayla Uyumlu Mekanlar",
      describe: "Estetik ve Sürdürülebilir",
      image: require('../../images/service_photo_1.jpg'),
      icon: React.createElement(MdApartment),
    },
    {
      id: 1,
      title: "Estetik ve Fonksiyon",
      describe: "Sürdürülebilir Mekanlar",
      image: require('../../images/service_photo_2.jpg'),
      icon: React.createElement(BsHouseLockFill),
    },
    {
      id: 2,
      title: "Özgün İç Tasarım",
      describe: "Kişiye Özel Yaşam",
      image: require('../../images/service_photo_3.jpg'),
      icon: React.createElement(MdOutlineDesignServices),
    },
  ];

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.175 }} 
      className="w-full py-[70px] lg:py-[150px] text-center bg-[#f8f4f3]">
      <h1 className="text-2xl lg:text-4xl font-bold mb-5 lg:mb-8">Hizmetler</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[10px] md:gap-[20px] lg:gap-[30px]">
        {
            servicesData.map((item) => (
                <ServiceCard key={item.id} title={item.title} describe={item.describe} image={item.image} icon={item.icon} />
            ))
        }
      </div>
    </motion.div>
  )
}

export default Services