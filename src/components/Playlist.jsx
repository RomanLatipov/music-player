import PostToPlaylist from "./PostToPlaylist"
import { useState, useEffect } from "react";

export default function Playlist() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => setPlaylists(data));
      }, [])

    const [playlistName, setPlaylistName] = useState();
    function handlePost(playlistName) {
        fetch("http://localhost:3000/playlists", {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({
                    [playlistName]: [
                        {                          
                        }
                    ] 
                })
            })
            .then( res => res.json() )
            .then(  )
    }
    // console.log(playlists[0].new_playlist[0].song);
    return(<>
        <button onClick={() => handlePost(playlistName)}>Make Playlist</button>
        <input placeholder="Playlist name..." value={playlistName} onChange={event => setPlaylistName(event.target.value)}></input>
        <b></b>
        {/* {playlists} */}
    </>)
}