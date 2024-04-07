import ReelCard from "./ReelCard";

const ShortVideo = () => {
  return (
    <div className="grid grid-cols-3  bg-red-300 grid-flow-col mt-3">
      <div className="">yo yo!</div>
      <div className="max-h-screen overflow-y-auto">
        <ReelCard />
        <ReelCard />
        <ReelCard />
      </div>
      {/* <div className=" w-full  h-screen flex  justify-center items-center">
        <iframe
          className="h-screen w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          src="/reel.mp4"
        ></iframe>
      </div> */}
      <div className="">hooyah</div>
    </div>
  );
};

export default ShortVideo;
