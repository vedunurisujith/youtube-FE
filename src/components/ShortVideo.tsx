import ReelCard from "./ReelCard";



const ShortVideo = () => {
  return (
    <div className="flex min-h-screen">
    <div className="w-1/4  fixed h-full">
    </div>
    <div className="flex-1 max-h-screen overflow-y-auto scrollbar-hide snap-y px-4">
      <ReelCard name= "/reel.mp4" />
      <ReelCard name = "/shinunogi.mp4" />
      <ReelCard name = "" />
    </div>
    <div className="w-1/4  fixed right-0 h-full">

    </div>
  </div>
 



    // <div className="grid grid-cols-3  bg-red-300  mt-3">
    //   <div className="">yo yo!</div>
    //   <div className="max-h-screen overflow-y-auto">
    //     <ReelCard />
    //     <ReelCard />
    //     <ReelCard />
    //   </div>
      /* <div className=" w-full  h-screen flex  justify-center items-center">
        <iframe
          className="h-screen w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          src="/reel.mp4"
        ></iframe>
      </div> */
    //   <div className="">hooyah</div>
    // </div>
  );
};

export default ShortVideo;
