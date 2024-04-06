import MenuAndIcon from "./MenuAndIcon";
import { SideElements } from "./SideElements";
import { SideBarProps } from "../utils/constants";
import React, { useState } from "react";

const SideBar = ({ isOpen, toggleSideBar }: SideBarProps) => {
  return (
    <div className=" col-start-1 justify-start p-4 ml-2">
      <aside
        className={`${isOpen ? "w-60" : "w-0"} transition-width duration-100 overflow-hidden `}
      >
        <div className=" flex flex-row ">
          <MenuAndIcon toggleSideBar={toggleSideBar} isOpen={isOpen} />
        </div>
        <div className="mt-10  flex-row ">
          <SideElements />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
