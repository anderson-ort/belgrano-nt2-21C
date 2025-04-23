import { useTheaterMode } from '../VideoPlayer/VideoPlayerContext';

const PlayerControls = () => {
    const { theaterMode, setTheaterMode } = useTheaterMode();

    return (
        <button onClick={() => setTheaterMode(prev => !prev)} className="theater-toggle-btn">
            {theaterMode ? "Salir de modo theater" : "Modo theater"}
        </button>
    );
};


export { PlayerControls }