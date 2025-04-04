import Playlist from "./Playlist";
import { useState, useEffect } from "react";

export default function DisplayPlaylists({setHomeOrPlaylist, setPlaylistId}) {
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => hanleDisplayPlaylists(data));
    }, [])

    function hanleDisplayPlaylists(data) {
        setPlaylists(data);
        // const temp = data.map(d => Object.keys(d))
        // const temp = Object.keys(data[0])[1]
        setPlaylists(data);
    }
    
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

    const display = playlists.map(playlist => <Playlist playlist={playlist} setHomeOrPlaylist={setHomeOrPlaylist} setPlaylistId={setPlaylistId}/>)
    return(<>
        <br></br>-----------------------<br></br>
        <button onClick={() => {
            handlePost(playlistName);
            setPlaylists([...playlists, playlistName]);
        }}>Make Playlist</button>
        <input placeholder="Playlist name..." value={playlistName} onChange={event => setPlaylistName(event.target.value)}></input>
        <br></br>
        {display}
    </>)
}