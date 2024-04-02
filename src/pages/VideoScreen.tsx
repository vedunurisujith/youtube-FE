const VideoScreen = () => {
  return (
    <div className="grid grid-cols-10 gap-1">
      <div className="lg:col-span-8 w-full sm: col-span-10">
        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source src="https://docs.material-tailwind.com/demo.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-2 bg-green-500 sm: hidden">hello</div>
    </div>
  );
};
export default VideoScreen;
