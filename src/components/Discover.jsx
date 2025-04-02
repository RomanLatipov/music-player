import Song from "./Song";
import { useState, useEffect } from "react";

export default function Discover({songSetter, setSrcChange}) {
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    const [displaySongs, setDisplaySongs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => setArrayOfSongs(data))
    }, [])
    
    function handleSearch(name) {
        const temp = arrayOfSongs.filter(song => song.title.toLowerCase().includes(name.toLowerCase()));
        setDisplaySongs(temp);
    }


    const songs = displaySongs.map(song => <Song title={song.title} songSetter={songSetter} setSrcChange={setSrcChange}/>)
    return(<>
        <h1>This is Discover</h1>
        <input type="test" placeholder="Search..." onChange={event => handleSearch(event.target.value)}></input>
        {songs}
    </>)
}