import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrid } from "./VideoGrid";
import { AppBar } from "./AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoGrid />
    </div>
  );
}
