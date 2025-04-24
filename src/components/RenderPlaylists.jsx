import Song from "./Song";
import { useState, useEffect } from "react"

export default function RenderPlaylists({playlistId, currentSongs, songSetter, setSrcChange, setIndex, setPlaying}) {
    const [playlistSongs, setPlaylistSongs] = useState([]);
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/playlists/"+playlistId)
        .then(res => res.json())
        .then(data => {
            setArrayOfSongs(data.songs);
            setPlaylistSongs(data.songs);
            songSetter(data.songs);
        })
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
        .then(res => res.json())
        .then(data => songSetter(data.songs))
    }

    function handleSearch(name) {
        const search = arrayOfSongs.filter(song => song.title.toLowerCase().includes(name.toLowerCase()));
        setPlaylistSongs(search);
    }

    const songs = playlistSongs.map(song => <Song key={song.id} song={song} index={playlistSongs.indexOf(song)} setIndex={setIndex} setSrcChange={setSrcChange} setPlaying={setPlaying} button={<button style={{width: "160px"}} onClick={() => {
        hanldeDeleteFromPlaylist(playlistId, song);
    }}>Delete</button>}/>)
    return(<>
        <input type="test" placeholder="Search..." onChange={event => handleSearch(event.target.value)}></input>
        <button onClick={() => {
            setPlaying(true)
            setSrcChange(true);
            setIndex(0);
        }}>Play playlist</button>
        {songs}
    </>)
}