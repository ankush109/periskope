import React, { useState } from "react";
import { Backup, ExitToAppOutlined } from "@mui/icons-material";

interface LeftBarProps {
  data: {
    lastActive: string;
    groupName: string;
    project: string;
    labels: string;
  };
}

const LeftBar: React.FC<LeftBarProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState<
    "Overview" | "Members" | "Logs"
  >("Overview");

  const Overview: React.FC = () => (
    <div className="w-full my-6 flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">Last Active</div>
        <div className="text-sm">{data?.lastActive}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">
          Disappearing Messages
        </div>
        <div>off</div>
      </div>
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">Last Acitve</div>
        <div className="text-sm">{data?.lastActive}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">Send Messages</div>
        <div>All</div>
      </div>
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">Project</div>
        <div className="items-center  justify-center text-blue-800 font-semibold bg-blue-100 rounded-xl p-1">
          {data?.project}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-md font-semibold text-gray-700">Labels</div>
        <div className="items-center justify-centerfont-semibold rounded-xl p-1">
          {data?.labels}
        </div>
      </div>
    </div>
  );

  const Members: React.FC = () => <div>Members Content</div>;

  const Logs: React.FC = () => <div>Logs Content</div>;

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Members":
        return <Members />;
      case "Logs":
        return <Logs />;
      default:
        return null;
    }
  };

  return (
    <div className="m-1 p-2">
      <div className="p-1 flex gap-5   ">
        <div>
          <img
            src="https://i1.sndcdn.com/artworks-pT0nUw9XbcwHcUrm-mhdoIA-t500x500.jpg "
            className="w-[40px] rounded-full"
          />
        </div>
        <div className="flex">
          <div className="text-lg font-bold ">{data?.groupName}</div>
        </div>
      </div>
      <div className="flex gap-6 ml-4">
        <div className="relative" onClick={() => setSelectedTab("Overview")}>
          <div className="">Overview</div>
          {selectedTab === "Overview" && (
            <div className="absolute inset-x-0 bottom--1 h-1 bg-green-500"></div>
          )}
        </div>
        <div className="relative" onClick={() => setSelectedTab("Members")}>
          <div className="">Members</div>
          {selectedTab === "Members" && (
            <div className="absolute inset-x-0 bottom--1 h-1 bg-green-500"></div>
          )}
        </div>
        <div className="relative" onClick={() => setSelectedTab("Logs")}>
          <div className="">Logs</div>
          {selectedTab === "Logs" && (
            <div className="absolute inset-x-0 bottom--1 h-1 bg-green-500"></div>
          )}
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300 my-4"></div>
      {renderTabContent()}
      <div className="w-full h-0.5 bg-gray-300 my-6"></div>
      <div className="">
        <div className="flex gap-3">
          <Backup />
          <div className="font-semibold"> export chat</div>
        </div>
        <div className="flex my-4 gap-3">
          <ExitToAppOutlined
            style={{
              color: "red",
            }}
          />
          <div className="text-red-500 font-semibold">Exit Group</div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
