import { useState } from "react";
import "./VideoPlayer.css";
import { useTheaterMode } from './VideoPlayerContext';
import { PlayerControls } from "./VideoPlayerControl";

const VideoPlayer = ({ videoSrc, videoTitle, videoLikes }) => {
    const { theaterMode } = useTheaterMode()

    if (!videoSrc)
        return <div className="video-player empty">Seleccioná un video</div>;

    return (
        <div className={`video-player ${theaterMode ? "theater" : ""}`}>
            <iframe
                src={videoSrc}
                title="Video player"
                allowFullScreen={true}
                loading="lazy"
            />
            <div>
                <h4 className="video-title">{videoTitle}</h4>
                <p className="channel-name">{videoLikes} Views</p>
            </div>
            <PlayerControls />
        </div>
    );
};

export default VideoPlayer;
