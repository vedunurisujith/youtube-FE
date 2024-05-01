// import {url} from "../utils/constants"
// interface UrlName {
//     name: string;
//    }

// const ReelCard: React.FC<url> = (UrlName ) => {{
//   return (
//       <div className=" flex justify-center scrollbar-hide items-center ">
//         <iframe
//           className="h-screen w-full snap-proximity aspect-video "
//           allow="autoplay"
//           allowFullScreen
//           src = {UrlName.name}
//         ></iframe>
//       </div>
//   );
// }};

// export default ReelCard;

// temp for testing purposes

// components/ReelCard.tsx
import React, { forwardRef } from "react";
import ReactPlayer from "react-player";

interface ReelCardProps {
  url: string;
  playing: boolean;
  onPlay: () => void;
}

const ReelCard = forwardRef<ReactPlayer, ReelCardProps>((props, ref) => {
  return (
    <div className="mb-4">
      <ReactPlayer
        ref={ref}
        url={props.url}
        playing={props.playing}
        controls={true}
        width="50%"
        height="100%"
        onPlay={props.onPlay}
      />
    </div>
  );
});

export default ReelCard;
