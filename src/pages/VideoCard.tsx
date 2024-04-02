export const VideoCard = () => {
  return (
    <div className="cursor-pointer">
      <img className="rounded-500 p-3" src="/photo.png" alt="label_image" />
      <div className="grid grid-cols-10 p-3 ">
        <div className="col-span-2">
          <img className="h-10" alt="" src="/label.png" />
        </div>
        <div className="col-span-8 ">
          <div className="text-black-500">
            {" "}
            Lana Del Rey - Summertime Sadness
          </div>
          <div className="text-slate-600">100M Views</div>
        </div>
      </div>
    </div>
  );
};
