import React, { useState } from "react";
import TabPanels from '../components/Tab/TabPanels';
import AddProjectCapsule from "../components/Tab/AddProjectCapsule";
import EditProjects from "../components/Tab/EditProjects";
import Header from "../components/Header/Header";

const Dashboard = () => {
  const [selectedCapsule, setSelectedCapsule] = useState();
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <Header />
      <div className="mt-32 px-20">
        <div className="flex flex-col">
          <TabPanels selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="flex">
            {selectedTab === 1 ? (
              <AddProjectCapsule />
            ) : (
              <EditProjects />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
