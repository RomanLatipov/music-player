export default function Navbar({setNavigate}) {
    return(<>
        <button onClick={() => setNavigate("home")}>Home</button>
        <button onClick={() => setNavigate("discover")}>Discover</button>
        <button onClick={() => setNavigate("eula")}>Eula</button>
    </>)
}