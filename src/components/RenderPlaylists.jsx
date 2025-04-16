import Song from "./Song";
import { useState, useEffect } from "react"

export default function RenderPlaylists({playlistId, songSetter, setSrcChange}) {
    const [playlistSongs, setPlaylistSongs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/playlists/"+playlistId)
        .then(res => res.json())
        .then(data => setPlaylistSongs(data.songs))
    }, [playlistId])

    function hanldeDeleteFromPlaylist(id, song) {
        const temp = playlistSongs.filter(s => s.id != song.id);
        setPlaylistSongs(temp);
        fetch("http://localhost:3000/playlists/"+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                songs: [...temp]
            })
        })
    }

    const songs = playlistSongs.map(song => <Song song={song} songSetter={songSetter} setSrcChange={setSrcChange} button={<button style={{width: "160px"}} onClick={() => {
        hanldeDeleteFromPlaylist(playlistId, song);
    }}>Delete</button>}/>)
    return(<>
        <h1>Playlist id is {playlistId}</h1>
        {songs}
    </>)
}