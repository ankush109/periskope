import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ContainerNavbar: React.FC<any> = () => {
  return (
    <>
      <div className="bg-gray-100 sticky top-0  shadow-lg p-1 flex justify-between">
        <div className="flex">
          <div className="m-1 relative">
            <input
              type="text"
              className="border rounded pl-8 pr-3 py-2 w-[200px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search"
            />
            <div className="absolute left-2 top-1">
              <SearchIcon
                style={{
                  color: "gray",
                }}
              />
            </div>
          </div>
          <div className="bg-white m-1 p-1 rounded-lg flex items-center">
            <div>
              <FilterAltIcon
                style={{
                  color: "gray",
                }}
              />
            </div>
            <div className="p-1  text-gray-600  text-sm">Filter</div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white m-1 p-1 rounded-lg flex items-center">
            <div className="p-1 text-white bg-green-600 rounded-sm  text-sm">
              Bulk Message
            </div>
          </div>

          <div className="bg-white m-1 p-1 rounded-lg flex items-center">
            <div className="p-1  text-gray-600  text-sm">Group Actions</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerNavbar;
