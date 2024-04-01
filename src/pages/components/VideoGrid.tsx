import { VideoCard } from "./VideoCard"

export const VideoGrid = () => {
return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div>
        <VideoCard/>
    </div>
    <div>
        <VideoCard/>
    </div>
    <div>
        <VideoCard/>
    </div>
    <div>
        <VideoCard/>
    </div>
    <div>
        <VideoCard/>
    </div>
    </div>
}