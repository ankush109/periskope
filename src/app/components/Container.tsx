"use client";
import React, { use, useEffect, useState } from "react";
import ContainerNavbar from "./ContainerNavbar";
import supabase from "./Config/SupabaseClient";
import toast from "react-hot-toast";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
interface FormData {
  groupName: string;
  project: string;
  labels: string;
  members: string;
  lastActive: string;
}

interface Props {
  onSelectRow: (item: any) => void;
}

const Container: React.FC<Props> = ({ onSelectRow }) => {
  const [lodata, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectRow, setSelectRow] = useState<any>(null);
  const [onplus, setOnPlus] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    groupName: "",
    project: "",
    labels: "",
    members: "",
    lastActive: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("contacts").select();
      setTotalPage(Math.ceil(data.length / 25));
      const newdata = data.slice((page - 1) * 25, page * 25);
      setData(newdata);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [formData, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const { data, error } = await supabase.from("contacts").insert([formData]);
    toast.success("successfully added data");
    fetchData();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };
  const handleRowClick = (item: any) => {
    setSelectRow(item);
    onSelectRow(item);
  };

  return (
    <div className="m-1 shadow-sm">
      <div className="flex flex-col ">
        <ContainerNavbar />
        {onplus ? (
          <div className="bg-blue-200 p-4 rounded-md">
            <div
              onClick={() => setOnPlus(!onplus)}
              className="cursor-pointer text-blue-600"
            >
              x
            </div>
            <form
              className="mt-4 flex justify-center items-center gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="groupName"
                required
                placeholder="Group Name"
                value={formData.groupName}
                onChange={handleInputChange}
                className="block w-42 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                name="project"
                placeholder="Project"
                required
                value={formData.project}
                onChange={handleInputChange}
                className="block w-full w-42 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                name="labels"
                required
                placeholder="Labels"
                value={formData.labels}
                onChange={handleInputChange}
                className="block w-full w-42 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="number"
                name="members"
                placeholder="Members"
                required
                value={formData.members}
                onChange={handleInputChange}
                className="block w-full w-42 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                name="lastActive"
                required
                placeholder="Last Active"
                value={formData.lastActive}
                onChange={handleInputChange}
                className="block w-full w-42 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div
            className="bg-blue-200 w-[100px] ml-2 mt-3 flex items-center justify-center rounded-xl"
            onClick={() => setOnPlus(!onplus)}
          >
            add row +
          </div>
        )}
        <div className="flex justify-between my-5">
          <div className="w-[30%] flex font-bold text-gray-600">group name</div>
          <div className="w-[10%] font-bold text-gray-600">Project</div>
          <div className="w-[10%] font-bold text-gray-600">Labels</div>
          <div className="w-[19%] font-bold flex items-center justify-center text-gray-600">
            Members
          </div>
          <div className="w-[11%] font-bold text-gray-600">Last Active</div>
        </div>
        <div className="overflow-y-auto max-h-[60vh]">
          {lodata?.map((item, index) => (
            <div
              onClick={() => handleRowClick(item)}
              key={index}
              className={`${
                selectRow?.groupName === item.groupName
                  ? "flex justify-between p-1 mr-6 bg-gray-200"
                  : "flex justify-between p-1 mr-6 hover:bg-gray-100"
              }`}
            >
              <div className="w-[30%] flex gap-2">
                <div>{item.groupName}</div>
                <div className="bg-green-400 rounded-full w-[25px]  text-sm text-white flex justify-center items-center">
                  11
                </div>
              </div>

              <div className="w-[10%] flex items-center justify-center text-blue-800 font-semibold bg-blue-100 rounded-xl">
                {item.project}
              </div>
              <div className="w-[10%]">
                <div className="flex justify-center items-center">
                  {item.labels}
                </div>
              </div>
              <div className="w-[20%] flex items-center justify-center text-gray-500 font-semibold">
                {item.members}
              </div>
              <div className="w-[10%] text-gray-400">{item.lastActive}</div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 w-[70%] p-4 flex justify-center">
          {/* {Array.from({ length: totalPage }, (_, index) => (
            <span
              key={index}
              onClick={() => setPage(index + 1)}
              className={`mx-2 cursor-pointer ${
                page === index + 1 ? "text-blue-500 font-bold" : ""
              }`}
            >
              {index + 1}
            </span>
          ))} */}
          <div
            onClick={() => {
              setPage((prevPage) => Math.max(prevPage - 1, 1));
            }}
          >
            <ChevronLeftIcon />
          </div>
          {page} of {totalPage}
          <div
            onClick={() => {
              setPage((prevPage) => Math.min(prevPage + 1, totalPage));
            }}
          >
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
