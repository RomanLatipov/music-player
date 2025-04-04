export default function Playlist({playlist, setHomeOrPlaylist, setPlaylistId, handleDelete}) {
    
    const name = Object.keys(playlist)[1];
    const id = playlist.id;
 
    return(<>
        <h1 style={{background: "white"}} onClick={() => {
            setHomeOrPlaylist(false);
            setPlaylistId(id);
        }}>{name}
        <button onClick={() => handleDelete(id)}>Delete</button>
        </h1>
        
    </>)
}