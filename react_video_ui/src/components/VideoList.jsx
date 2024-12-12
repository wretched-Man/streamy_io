import { useState, useEffect } from "react"
import VideoCard from "./VideoCard"

const VideoList = ({ videoLayout = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-12", excludeVideoId="" }) => {
    const [videoLoader, setVideoLoader] = useState([]);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const res = await fetch('/api/videos/?' + new URLSearchParams({
                    item: excludeVideoId,
                }).toString());
                const data = await res.json();
                setVideoLoader(data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchVideoData()
    }, [])

    return (
        <div className={videoLayout}>
            {
                videoLoader.map(
                    video => <VideoCard key={video.video_id} videoUrlKey={video.video_id} videoCardSource={`/api/${video.thumbnail}`} videoTitle={video.title} videoLength={video.video_length_time} videoAddDate={video.date_posted}/>)
            }
        </div>
    )
}


export default VideoList