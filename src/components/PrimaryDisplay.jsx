import Navbar from "./Navbar";
import Home from "./Home";
import Discover from "./Discover";
import Eula from "./Eula";
import { useState, useEffect } from "react"


export default function PrimaryDisplay({songSetter, setSrcChange, setIndex, setPlaying}) {
    const [navigate, setNavigate] = useState("home");
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    
    
    return(<>
        <Navbar setNavigate={setNavigate} />
        {(navigate === "home") ? <Home /> : (navigate === "discover") ? <Discover songSetter={songSetter} setSrcChange={setSrcChange} setIndex={setIndex} setPlaying={setPlaying}/> : <Eula />}
        {/* r<RenderSongs songsArray={arrayOfSongs} songSetter={songSetter} setSrcChange={setSrcChange}/> */}
    </>)
}