import Navbar from "./Navbar";
import Home from "./Home";
import Discover from "./Discover";
import Eula from "./Eula";
import { useState } from "react"


export default function PrimaryDisplay({songSetter, setSrcChange, setIndex, setPlaying}) {
    // const [navigate, setNavigate] = useState("home");    
    
    return(<>
        <Navbar />
        {/* {(navigate === "home") ? <Home /> : (navigate === "discover") ? <Discover songSetter={songSetter} setSrcChange={setSrcChange} setIndex={setIndex} setPlaying={setPlaying}/> : <Eula />} */}
    </>)
}