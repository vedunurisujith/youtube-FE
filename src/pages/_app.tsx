import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "./AppBar";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const additionalProps = {
    // Your additional props here
    currentState: <Home />,
  };

  return (
    <div className="flex">
      <SideBar
        isOpen={isSideBarOpen}
        toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
      />
      <div className="flex-1">
        <AppBar
          isOpen={isSideBarOpen}
          toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
        />
        <Component {...pageProps} {...additionalProps} />
      </div>
    </div>
  );
}
