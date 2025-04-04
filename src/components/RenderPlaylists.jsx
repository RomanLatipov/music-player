import Song from "./Song";
import { useState, useEffect } from "react"

export default function RenderPlaylists({playlistId, songSetter, setSrcChange}) {
    const [playlistSongs, setPlaylistSongs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/playlists/"+playlistId)
        .then(res => res.json())
        .then(data => setPlaylistSongs(data[Object.keys(data)[1]]))
    }, [playlistId])


    // console.log(playlistSongs);
    const songs = playlistSongs.map(song => <Song song={song} songSetter={songSetter} setSrcChange={setSrcChange} button={<button style={{width: "160px"}}>Add to Playlist</button>}/>)
    return(<>
        <h1>Playlist id is {playlistId}</h1>
        {songs}
    </>)
}