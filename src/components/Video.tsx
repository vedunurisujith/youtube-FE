import React, { useRef, useEffect } from "react";

interface VideoProps {
  src: string;
  isPlaying: boolean;
}

const Video: React.FC<VideoProps> = ({ src, isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className=" flex justify-center items-center ">
      <video
        ref={videoRef}
        src={src}
        loop
        controls
        height="100%"
        width="40%"
        playsInline
        className=""
        // ... any other props you need
      />
    </div>
  );
};

export default Video;
