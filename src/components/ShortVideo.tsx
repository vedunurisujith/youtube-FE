// import ReelCard from "./ReelCard";

// const ShortVideo = () => {
//   return (
//     <div className="flex min-h-screen">
//     <div className="w-1/4  fixed h-full">
//     </div>
//     <div className="flex-1 max-h-screen overflow-y-auto scrollbar-hide snap-y px-4">
//       <ReelCard name= "/reel.mp4" />
//       <ReelCard name = "/shinunogi.mp4" />
//       <ReelCard name = "" />
//     </div>
//     <div className="w-1/4  fixed right-0 h-full">

//     </div>
//   </div>

//     // <div className="grid grid-cols-3  bg-red-300  mt-3">
//     //   <div className="">yo yo!</div>
//     //   <div className="max-h-screen overflow-y-auto">
//     //     <ReelCard />
//     //     <ReelCard />
//     //     <ReelCard />
//     //   </div>
//       /* <div className=" w-full  h-screen flex  justify-center items-center">
//         <iframe
//           className="h-screen w-full aspect-video"
//           allow="autoplay"
//           allowFullScreen
//           src="/reel.mp4"
//         ></iframe>
//       </div> */
//     //   <div className="">hooyah</div>
//     // </div>
//   );
// };

// export default ShortVideo;

//temp for testing purpose only

// ... (other imports)
// components/ShortVideo.tsx
import React, { useState, useRef, useEffect } from "react";
import ReelCard from "./ReelCard";
import ReactPlayer from "react-player";

const reelVideos = [
  "/reel.mp4",
  "/shinunogi.mp4",
  // Add more video URLs as needed
];

const ShortVideo = () => {
  const [playingIndex, setPlayingIndex] = useState<number>(-1);
  const playerRefs = useRef<(ReactPlayer | null)[]>([]);

  const handlePlay = (index: number) => {
    // Pause all videos first
    playerRefs.current.forEach((player, i) => {
      if (player && i !== index) {
        player.getInternalPlayer().pause();
      }
    });
    // Play the selected video
    setPlayingIndex(index);
  };

  useEffect(() => {
    // Optional: implement logic to determine which video should be played when scrolling
    // ...
  }, []);

  return (
    <div className="flex  min-h-screen">
      <div className="bg-red-300">yo yo!</div>
      <div className="flex-grow overflow-y-auto">
        {reelVideos.map((videoUrl, index) => (
          <ReelCard
            key={videoUrl}
            url={videoUrl}
            playing={index === playingIndex}
            onPlay={() => handlePlay(index)}
            ref={(el) => {
              // Properly assign the ref here
              playerRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className="bg-orange-300">hooyah</div>
    </div>
  );
};

export default ShortVideo;
