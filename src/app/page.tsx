"use client";
import Image from "next/image";
import Sidebar from "./components/SideBar";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import LeftBar from "./components/LeftBar";
import UpperNavbar from "./components/UpperNavbar";
import supabase from "./components/Config/SupabaseClient";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
export default function Home() {
  const [data, setDate] = useState(null);
  console.log(supabase);
  const handleSelectData = (rowData: any) => {
    setDate(rowData);
    console.log(rowData);
  };

  const MAX_TOAST_LIMIT = 2;
  const { toasts } = useToasterStore();
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= MAX_TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);
  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
      <div className="w-[200px] shadow-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full ">
          <div>
            <UpperNavbar />
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="w-5/6 ">
            <Container onSelectRow={handleSelectData} />
          </div>
          <div className="w-[20%]">
            <LeftBar data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
