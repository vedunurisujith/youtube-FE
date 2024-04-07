import { sideBarElementsData } from "@/components/sideBarData";
import { MyContext } from "@/context/MyContext";
import Link from "next/link";
import { useContext } from "react";

export const SideElements = () => {
  const { setCurrentState } = useContext(MyContext);

  return (
    <>
      {sideBarElementsData.map((side) => {
        return (
          <div key={side.description} className="p-1 m-1 flex  ">
            <Link href="/">
              <button
                onClick={() => {
                  setCurrentState(side.component);
                  console.log(side.description + "button is clicked");
                }}
                className="p-1 m-1 flex w-full cursor-pointer "
              >
                <span className="pr-3  ">{side.icon}</span>
                <span className="">{side.description}</span>
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
