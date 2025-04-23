const videoEmbedUrl = (video) => {
    if (!video || !video.videoId) return ""
    return `https://www.youtube.com/embed/${video.videoId}`
}

export { videoEmbedUrl }