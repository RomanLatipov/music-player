import RenderSongs from "./RenderSongs";
import Navbar from "./Navbar";
import Home from "./Home";
import Discover from "./Discover";
import Eula from "./Eula";
import { useState, useEffect } from "react"


export default function PrimaryDisplay({songSetter, setSrcChange}) {
    const [navigate, setNavigate] = useState("home");
    const [arrayOfSongs, setArrayOfSongs] = useState([]);
    
    
    return(<>
        <Navbar setNavigate={setNavigate} />
        {(navigate === "home") ? <Home /> : (navigate === "discover") ? <Discover songSetter={songSetter} setSrcChange={setSrcChange} /> : <Eula />}
        {/* r<RenderSongs songsArray={arrayOfSongs} songSetter={songSetter} setSrcChange={setSrcChange}/> */}
    </>)
}