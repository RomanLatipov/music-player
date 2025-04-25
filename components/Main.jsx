import RenderSongs from "./RenderSongs";
import { useState, useEffect } from "react"

export default function Main({songSetter, setSrcChange}) {
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    // const [temp, setTemp] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => setArrayOfSongs(data))
    }, [])
    
    return(<>
        <RenderSongs songsArray={arrayOfSongs} songSetter={songSetter} setSrcChange={setSrcChange}/>
    </>)
}