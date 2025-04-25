import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(<>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/login">Eula</NavLink>
        </nav>
    </>)
}



{/* <button onClick={() => setNavigate("home")}>Home</button>
<button onClick={() => setNavigate("discover")}>Discover</button>
<button onClick={() => setNavigate("eula")}>Eula</button> */}