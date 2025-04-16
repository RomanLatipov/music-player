import "./Song.css"

export default function Song({song, songSetter, setSrcChange, button}) {
    return(<>
        <div style={{background: "white", display: "flex", padding: "0.5rem"}}>
            <button onClick={() => {
                        songSetter([song.title]);
                        setSrcChange(true);
                    }}>{<span class="material-symbols-outlined">play_arrow</span>}
            </button>
            <div>
                <h1>{song.title}</h1>
                <p style={{color: "grey"}}>{song.artist}</p>
            </div>
            <div class="dropdown">
                <div class="dropdown-menu">...</div>
                <div class="dropdown-content">
                    {button}
                </div>
            </div>
        </div>
    </>)
}