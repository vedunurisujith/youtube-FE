const ReelCard = () => {
  return (
    // <div className="">
      <div className=" w-full flex  justify-center items-center">
        <iframe
          className="h-screen w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          src="/reel.mp4"
        ></iframe>
      </div>
    // </div>
  );
};

export default ReelCard;
