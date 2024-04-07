import MenuAndIcon from "./MenuAndIcon";
import { SideElements } from "./SideElements";
import React, { useContext } from "react";
import { MyContext } from "@/context/MyContext";

const SideBar = () => {
  const { isSideBarOpen } = useContext(MyContext);

  return (
    <div className=" col-start-1 justify-start p-4 ml-2">
      <aside
        className={`${isSideBarOpen ? "w-60" : "w-0"} transition-width duration-100 overflow-hidden `}
      >
        <div className=" flex flex-row ">
          <MenuAndIcon />
        </div>
        <div className="mt-10  flex-row ">
          <SideElements />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
