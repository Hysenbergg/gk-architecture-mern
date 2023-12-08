import React from "react";
import Tab from "./Tab";

const TabPanels = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex w-full bg-gray-50 gap-x-[1px]">
      <Tab
        title={"Proje Ekle"}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabCount={1}
      />
      <Tab
        title={"Proje Düzenle"}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabCount={2}
      />
    </div>
  );
};

export default TabPanels;
