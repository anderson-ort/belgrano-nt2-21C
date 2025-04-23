import React from 'react'
import "./MiniVideoCard.css"

const options = [
    { name: 'Watch later', icon: 'M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z' },
    { name: 'Add to playlist', icon: 'M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z' },
    { name: 'Not interested', icon: 'M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' }
]

const MiniVideoCard = ({ data, showOptions, toggleOptions, onSelect }) => {


    return (
        <div className="mini-video-card" onClick={onSelect}>
            <div className="thumbnail-container">
                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="thumbnail"
                />
                <span className="duration">{data.duration ?? "0:00"}</span>
            </div>

            <div className="content-container">
                <h4 className="video-title">{data.title}</h4>
                <p className="channel-name">{data.channel}</p>
                <div className="meta-info">
                    <span>{data.totalViews} views</span>
                    <span className="dot">•</span>
                    <span>{data.yearsOld}</span>
                    {data.verified && (
                        <span>
                            <svg className="verified-badge" viewBox="0 0 24 24" fill="#606060">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>

            <button
                className="menu-button"
                onClick={toggleOptions}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
            </button>

            {showOptions && (
                <div className="options-menu">
                    <ul className="options-list">
                        {options.map((option, index) => (
                            <li key={index} className="option-item">
                                <svg
                                    className="option-icon"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d={option.icon} />
                                </svg>
                                <span>{option.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );


}

export default MiniVideoCard