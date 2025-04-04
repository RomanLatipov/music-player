import Playlist from "./Playlist";
import { useState, useEffect } from "react";

export default function DisplayPlaylists({setHomeOrPlaylist, setPlaylistId}) {
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => setPlaylists(data));
    }, [])

    // function hanleDisplayPlaylists(data) {
    //     setPlaylists(data);
    //     // const temp = data.map(d => Object.keys(d))
    //     // const temp = Object.keys(data[0])[1]
    //     setPlaylists(data);
    // }
    
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
        .then(res => res.json())
        .then(data => setPlaylists([...playlists, data]))
    }

    function handleDelete(id) {
        fetch("http://localhost:3000/playlists/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            const temp = playlists.filter(p => (p.id !== data.id));
            console.log(temp);
            setPlaylists(temp);
        })
    }

    const display = playlists.map(playlist => <Playlist playlist={playlist} setHomeOrPlaylist={setHomeOrPlaylist} setPlaylistId={setPlaylistId} handleDelete={handleDelete}/>)
    return(<>
        <br></br>-----------------------<br></br>
        <button onClick={() => {
            handlePost(playlistName);
        }}>Make Playlist</button>
        <input placeholder="Playlist name..." value={playlistName} onChange={event => setPlaylistName(event.target.value)}></input>
        <br></br>
        {display}
    </>)
}