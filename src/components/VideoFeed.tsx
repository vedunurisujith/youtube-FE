import React, { useState, useEffect, useRef } from "react";
import Video from "./Video";

const videoSources = [
  "/reel.mp4",
  "/shinunogi.mp4",
  "/reel.mp4",
  "/shinunogi.mp4",
  "/reel.mp4",
  "/shinunogi.mp4",
  // Add more video sources as needed
];

const VideoFeed: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number>(-1);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setPlayingIndex(index);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Adjust threshold to when video should start
      },
    );

    const videoElements = document.querySelectorAll(".video-element");

    videoElements.forEach((element) => {
      observer.current?.observe(element);
    });

    return () => {
      videoElements.forEach((element) => {
        observer.current?.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex-col">
      {videoSources.map((src, index) => (
        <div
          key={src}
          data-index={index}
          className="video-element flex min-h-screen"
        >
          <div className="w-1/4    fixed h-full"></div>
          <div className="flex-1 px-4">
            <div >
              <Video src={src} isPlaying={playingIndex === index} />
            </div>
          </div>
          <div className="w-1/4  fixed right-0 h-full"></div>
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
