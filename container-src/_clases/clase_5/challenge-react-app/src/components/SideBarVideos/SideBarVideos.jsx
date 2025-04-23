import React from 'react'
import MiniVideoCardContainer from '../MiniVideoCard/MiniVideoCardContainer'

const SideBarVideos = ({ videos, onVideoSelect }) => {
    return (
        <aside className='sidebar-videos'>
            {videos.map((video, indx) => (<MiniVideoCardContainer key={indx} data={video} onSelect={() => onVideoSelect(video)} />))}
        </aside>
    )
}

export default SideBarVideos