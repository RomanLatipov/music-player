import PostToPlaylist from "./PostToPlaylist"
import { useState, useEffect } from "react";

export default function Playlist() {
    const [playlists, setPlaylists] = useState([]);
    const [playlistNames, setPlaylistNames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => hanleDisplayPlaylists(data));
      }, [])


    function hanleDisplayPlaylists(data) {
        setPlaylists(data);
        const temp = data.map(d => Object.keys(d)[1])
        // const temp = Object.keys(data[0])[1]
        setPlaylistNames(temp);
    }
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
    
    return(<>
        <br></br>
        <button onClick={() => handlePost(playlistName)}>Make Playlist</button>
        <input placeholder="Playlist name..." value={playlistName} onChange={event => setPlaylistName(event.target.value)}></input>
        <b></b>
        <p>{playlistNames[0]}</p>
        <p>{playlistNames[1]}</p>
    </>)
}