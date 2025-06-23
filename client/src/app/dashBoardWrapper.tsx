"use client";

import React, { useEffect } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {

  const isDarkMode = useAppSelector((state) => state.global.IsDarkMode)

  const isSideBarCollapsed = useAppSelector((state) => state.global.IsSidebarCollapsed);

  useEffect(() =>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("light");
    }
  })
  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} flex min-h-screen w-full h-full text-gray-900 bg-gray-50 `}
    >
      <Sidebar />
      <main  className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSideBarCollapsed   ? "md:pl-24" : "md:pl-72"
        }`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};
const DashBoardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </StoreProvider>
  );
};

export default DashBoardWrapper;
