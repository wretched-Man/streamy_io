import { Link } from "react-router-dom"
import { VideoDuration, VideoAddFormatting } from "./Formatting"
// Add default props

const VideoCard = ({ videoUrlKey, videoCardSource, videoTitle, videoAddDate, videoLength }) => {
    
    return (
        <div className="grid auto-rows-auto gap-4 p-4 bg-white shadow-sm shadow-gray-600 dark:bg-[#262c36] rounded-2xl snap-center">
            <div>
                <div className="relative min-h-fit">
                    <Link to={`/videos/${videoUrlKey}`} className="">
                        <img src={videoCardSource} alt={videoTitle} className="w-full aspect-video object-cover rounded-2xl relative" />
                    </Link>
                    <span className="bg-white/75 dark:bg-black/75 dark:text-white absolute p-1 rounded-md bottom-2 right-2 ">
                        <VideoDuration videolength={videoLength}/>
                    </span>
                </div>
            </div>
            <div className="pt-2 flex flex-col">
                <p className="font-semibold text-black dark:text-white align-top">{videoTitle}</p>
                <div className="flex justify-between pt-4 text-black dark:text-gray-50 font-light text-sm align-bottom">
                    <VideoAddFormatting dateTimeAdded={videoAddDate}/>
                </div>
            </div>
        </div>
    )
}


export default VideoCard