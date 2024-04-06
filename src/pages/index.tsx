import { useContext } from "react";
import { MyContext } from "@/context/MyContext";

export default function Home() {
  const { currentState } = useContext(MyContext);

  return (
    <div>
      {currentState}
    </div>
  );
}
