import Link from "next/link";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {list.map((x) => {
        return (
          <div key="">
            <Link href="/VideoScreen">
              <VideoCard />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoGrid;
