import {url} from "../utils/constants"
interface UrlName {
    name: string;
   }
   

const ReelCard: React.FC<url> = (UrlName ) => {{
  return (
      <div className=" flex justify-center scrollbar-hide items-center ">
        <iframe
          className="h-screen w-full snap-proximity aspect-video "
          allow="autoplay"
          allowFullScreen
          src = {UrlName.name}
        ></iframe>
      </div>
  );
}};

export default ReelCard;
