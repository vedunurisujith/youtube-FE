import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "./AppBar";
import SideBar from "../components/SideBar";
import { MyProvider } from "@/context/MyContext";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MyProvider>
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <AppBar/>
        <Component {...pageProps}  />

      </div>
    </div>
        </MyProvider>
  );
}
