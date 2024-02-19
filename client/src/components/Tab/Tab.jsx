import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

//selectedTab ile de css ayarla.

const Tab = ({ title, selectedTab, setSelectedTab, tabCount }) => {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer px-5 py-3 border border-gray-100 ${
        selectedTab === tabCount && "bg-white"
      }`}
      onClick={() => setSelectedTab(tabCount)}
    >
      <span>{title}</span>
      {selectedTab === tabCount && <IoMdArrowDropdown />}
    </div>
  );
};

export default Tab;
