import "./Discover.css";
import Song from "./Song";
import List from "./List";
import { useState, useEffect } from "react";

export default function Discover({songSetter, setSrcChange, setIndex, setPlaying}) {
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    const [displaySongs, setDisplaySongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => {
            setArrayOfSongs(data);
            setDisplaySongs(data);
            songSetter(data);
        })
    }, []);

    function handlePostToPlaylist(id, song){
        const uniqueId = () => {
            const dateString = Date.now().toString(36);
            const randomness = Math.random().toString(36).substr(2);
            return dateString + randomness;
        };
        
        const newSong = {
            "id": uniqueId(),
            "title": song.title,
            "artist": song.artist,
            "genres": song.genres,
            "album_cover": song["album_cover"]
        }
        fetch("http://localhost:3000/playlists/"+id)
        .then(res => res.json())
        .then(data => fetch("http://localhost:3000/playlists/"+id, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            songs: [...data.songs, newSong]
                        })
                    }))
    }

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => setPlaylists(data))
    }, [])

    function handleSearch(name) {
        const search = arrayOfSongs.filter(song => song.title.toLowerCase().includes(name.toLowerCase()));
        setDisplaySongs(search);
    }
    console.log(displaySongs);
    
    // const test = playlists.map(list => <List id={list.id} name={list.name} handlePostToPlaylist={handlePostToPlaylist} song={song}/>)
    const songs = displaySongs.map(song => <Song key={song.id} song={song} index={displaySongs.indexOf(song)} setIndex={setIndex} setSrcChange={setSrcChange} setPlaying={setPlaying}
        button={playlists.map(list => <List id={list.id} name={list.name} handlePostToPlaylist={handlePostToPlaylist} song={song}/>)}/>)
    return(<>
        <h1>This is Discover</h1>
        <input type="test" placeholder="Search..." onChange={event => handleSearch(event.target.value)}></input>
        <div id="songs">
            {songs}
        </div>
    </>)
}