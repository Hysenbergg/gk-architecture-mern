import React from 'react'

const TabButton = ({ tabName, title, selectService, setSelectedService }) => {
    return (
      <button
        onClick={() => setSelectedService(tabName)}
        className={
          selectService === tabName
            ? "sm:w-[100px] md:w-[150px] lg:w-[220px] flex justify-start text-black text-[15px] md:text-[18px]"
            : "sm:w-[100px] md:w-[150px] lg:w-[220px] flex justify-start text-[#73767D] text-[15px] md:text-[18px]"
        }
      >
        {title}
      </button>
    );
  };

export default TabButton