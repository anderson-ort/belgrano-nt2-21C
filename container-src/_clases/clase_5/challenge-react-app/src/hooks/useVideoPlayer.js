import { useState } from "react"

const useVideoPlayer = (initialVideo) => {
    const [selectedVideo, setSelectedVideo] = useState(initialVideo)
    const playVideo = (video) => {

        setSelectedVideo(video);
    }

    return {
        selectedVideo, playVideo
    }

}


export { useVideoPlayer }