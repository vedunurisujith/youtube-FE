import { sideBarElementsData } from "@/components/sideBarData";

export const SideElements = () => {
  // const [currentState, setCurrentState] = useState(sideBarElementsData[0].component)
  return (
    <>
      {sideBarElementsData.map((side) => {
        return (
          <div key={side.description} className="p-1 m-1 flex  ">
            <button
              onClick={() => {
                console.log(side.description + "button is clicked");
              }}
              className="p-1 m-1 flex w-full cursor-pointer "
            >
              <span className="pr-3  ">{side.icon}</span>
              <span className="">{side.description}</span>
            </button>
          </div>
        );
      })}
    </>
  );
};
