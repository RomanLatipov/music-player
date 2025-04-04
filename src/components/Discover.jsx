import Song from "./Song";
import { useState, useEffect } from "react";

export default function Discover({songSetter, setSrcChange}) {
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    const [displaySongs, setDisplaySongs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => {
            setArrayOfSongs(data);
            setDisplaySongs(data);
        })
    }, [])
    
    function handleSearch(name) {
        const search = arrayOfSongs.filter(song => song.title.toLowerCase().includes(name.toLowerCase()));
        setDisplaySongs(search);
    }

    const songs = displaySongs.map(song => <Song song={song} songSetter={songSetter} setSrcChange={setSrcChange} button={<button style={{width: "160px"}}>Add to Playlist</button>}/>)
    return(<>
        <h1>This is Discover</h1>
        <input type="test" placeholder="Search..." onChange={event => handleSearch(event.target.value)}></input>
        {songs}
    </>)
}