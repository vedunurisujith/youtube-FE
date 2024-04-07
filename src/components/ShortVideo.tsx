const ShortVideo = () => {
  return (
    // <div className="flex   bg-red-400 h-full">
    //   <div className="col-span-3 w-100"></div>
    //   <div className=" h-full w-90 shadow-2xl">
    //     <video className="h-full w-90 rounded-lg cursor-pointer " autoPlay>
    //       <source src="https://docs.material-tailwind.com/demo.mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // </div>

    // <div className="grid grid-cols-3 grid-flow-col">
    //     <div className="bg-red-300 h-full">
    //     <iframe className="h-full aspect-video" src="https://docs.material-tailwind.com/demo.mp4"></iframe>
    //     </div>
    //     <div className="bg-blue-400 h-screen">
    //       <div className="h-full bg-green-400 ">
    //       <video className="h-full w-fullrounded-lg cursor-pointer " autoPlay>
    //       <source src="https://docs.material-tailwind.com/demo.mp4" />
    //        Your browser does not support the video tag.
    //      </video>
    //       </div>
    //       </div>
    //     <div className="bg-orange-300">hooyah</div>
    // </div>

    <div className="grid grid-cols-3 grid-flow-col mt-3">
      <div className="">yo yo!</div>
      <div className=" w-full  h-screen flex  justify-center items-center">
        {/* <div className="h-screen w-full "> */}
        <iframe
          className="h-screen w-full aspect-video"
          allow="autoplay"
          allowFullScreen
          src="/reel.mp4"
        ></iframe>
        {/* </div> */}
      </div>
      <div className="">hooyah</div>
    </div>

    //   <div className="flex flex-col h-screen">
    //   <header className="h-16">Header Content</header>

    //   <div className="flex-grow flex">
    //     <div className="w-1/4 bg-red-300">
    //       yo yo!
    //     </div>

    //     <div className="w-1/2 bg-blue-400 flex items-center justify-center">
    //       <div className="aspect-w-3 aspect-h-2 w-full max-h-full">
    //         <iframe
    //           className="w-full h-full"
    //           src="https://docs.material-tailwind.com/demo.mp4"
    //           title="Demo Video"
    //           allowFullScreen >
    //         </iframe>
    //       </div>
    //     </div>

    //     <div className="w-1/4 bg-orange-300">
    //       hooyah
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShortVideo;
