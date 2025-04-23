import React, { useRef } from 'react';
import { videoEmbedUrl } from './utils/video-url'

import { useSearch } from './hooks/useSearch'
import { useVideoPlayer } from './hooks/useVideoPlayer'

import dataVideos from "./data/videos.json"

import SearchBar from './components/SearchBar/SearchBar'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import SideBarVideos from './components/SideBarVideos/SideBarVideos'
import PlayerControls from './components/PlayerControls/PlayerControls'

import "./App.css"
import { formatViews } from './utils/views-into-shorts';
import { useTheaterMode } from './components/VideoPlayer/VideoPlayerContext';

const App = () => {
  const [initVideo, ...videos] = dataVideos.map(video => ({ ...video, totalViews: formatViews(video.totalViews) }));

  const { input, search, handleChange, resetSearch } = useSearch()
  const { selectedVideo, playVideo } = useVideoPlayer(initVideo)

  const { rootRef, theaterMode, setTheaterMode } = useTheaterMode()
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleVideoPlay = video => {
    playVideo(video)
    resetSearch()
  }



  return (
    <div className="app-container" ref={rootRef}>
      <SearchBar value={input} onChange={handleChange} />
      <VideoPlayer
        videoSrc={videoEmbedUrl(selectedVideo)}
        videoTitle={selectedVideo.title}
        videoLikes={selectedVideo.totalViews}
        theaterMode={theaterMode}
        setTheaterMode={setTheaterMode} />

      <PlayerControls videoSelected={selectedVideo} />
      <SideBarVideos videos={filteredVideos} onVideoSelect={handleVideoPlay} />
    </div>

  )
}

export default App